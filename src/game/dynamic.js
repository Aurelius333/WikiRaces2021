// superagent to get wikipedia pages
const superagent = require("superagent");

// Statistics
const stats = require("./stats");
const avg = new stats.Average();

// Bunyan, for logging
const bunyan = require("bunyan");
const bunyanOpts = {
	name: "DynamicGeneration",
	streams: [
		{
			level: "debug",
			stream: process.stdout,
		},
		{
			level: "info",
			path: "/var/tmp/WikiRaces.json",
		},
	],
};
const log = bunyan.createLogger(bunyanOpts);

// fs, for caching files
const fs = require("fs");
const asyncfs = require("fs").promises;
const path = require("path");

// jsdom to create and modify the page
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// basic html and css
const { fillTemplate } = require("./template");

// This gets the raw html from wikipedia.
// I do not use an API because I want to preserve
// the look of the website.
async function getWiki(id) {
	try {
		const response = await superagent.get(
			`https://en.wikipedia.org/wiki/${id}`
		);
		log.info(`Downloaded ${id}`);
		return response.text;
	} catch (error) {
		log.warn(error);
		return undefined;
	}
}

function tryRemoveClass(page, name) {
	const regex = new RegExp(`<div.*class="${name}.*>([\s\S]*?)<\/div>`, "gm");
	return page.replaceAll(regex, "");
}

function tryRemoveId(page, name) {
	const regex = new RegExp(`<div.*id="${name}.*>([\s\S]*?)<\/div>`, "gm");
	return page.replaceAll(regex, "");
}

async function formatPage(page) {
	// remove html boilerplate:
	page = page.replace("<!DOCTYPE html>", "");
	page = page.replace("<body>", "");
	page = page.replace("</body>", "");
	page = page.replace(/<html.*>/, "");
	page = page.replace("</html>", "");
	// removes all script tags
	page = page.replaceAll(
		/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		""
	);
	// remove footer
	page = page.replaceAll(/<footer[\s\S]*<\/footer>/gm, "");
	// remove citations
	page = page.replaceAll(/<h2.*id="References.*h2>/gm, "");
	page = page.replaceAll(/<li id="cite_note([\s\S]*?)<\/li>/gm, "");
	// remove navigation
	page = page.replaceAll("<h2>Navigation menu</h2>", "");
	page = page.replaceAll(
		/<div id="mw-navigation([\s\S]*?)<\/form>\n<\/div>/gm,
		""
	);
	// remove external links section
	page = page.replaceAll(/<nav id="p-([\s\S]*?)<\/nav>/gm, "");
	page = page.replaceAll(/<h2.*External links.*<\/h2>/gm, "");
	page = page.replaceAll(/<table.*sistersitebox([\s\S]*?)<\/table>/gm, "");
	page = page.replaceAll(/<div role.*sistersitebox.*$/gm, "");
	// replace external links with text
	page = page.replaceAll(/<a rel.*external text.*<\/a>/g, "[external link]");
	// remove Jump To ___ links
	page = page.replaceAll(/<a class.*Jump.*/g, "");
	// remove php scripts
	page = page.replaceAll(/<link rel.*php\?.*/g, "");
	// remove all [edit] boxes without removing the end tags
	page = page.replaceAll(/<span class="mw-editsection">.*(?=(<\/h.*>))/g, "");
	page = page.replaceAll(/<div.*class="refbegin.*>([\s\S]*?)<\/div>/gm, "");
	page = page.replaceAll(
		/<div role="navigation".*navbox auth.*>([\s\S]*?)<\/div>/gm,
		""
	);
	// remove divs by class
	page = tryRemoveClass(page, "reflist");
	page = tryRemoveClass(page, "printfooter");
	page = tryRemoveClass(page, "navbox authority-control");
	page = tryRemoveClass(page, "mw-indicator");
	// remove divs by id
	page = tryRemoveId(page, "catlinks");

	return page;
}

async function generatePage(id) {
	// const dom = new JSDOM(htmlTemplate);
	// const document = dom.window.document;
	// get raw html from wikipedia.
	let page = await getWiki(id);
	if (!page) {
		return "This page does not exist.";
	}
	page = await formatPage(page);
	page = await fillTemplate(page, id);
	return page;

	// // add logo and text to top left of page
	// const image = document.createElement("img");
	// image.src = "../wiki-races/logo.png";
	// image.style.height = "95px";

	// const text = document.createElement("h1");
	// text.textContent = "Wiki Races 2021";
	// text.style.borderBottom = "0";
	// text.style.padding = "35px";

	// const heading = document.getElementById("mw-head-base");
	// heading.style.height = "100px";
	// heading.style.display = "flex";
	// heading.style.flexDirection = "row";
	// heading.append(image);
	// heading.append(text);

	// return dom.serialize();
}

// make folder if none exists
const cacheFolder = path.join(__dirname, "/cache");
if (!fs.existsSync(cacheFolder)) {
	fs.mkdirSync(cacheFolder);
}

// save file to cache
async function saveFile(id, content) {
	fs.writeFile(`${cacheFolder}/${id}.html`, content, (err) => {
		if (err) {
			return undefined;
			log.error(err);
		}
		log.info(`saved ${id} to cache.`);
	});
}

function isCached(id) {
	return fs.existsSync(`${cacheFolder}/${id}.html`);
}

// get file from cache, or return undefined
async function getCached(id) {
	try {
		log.info(`read ${id} from cache.`);
		return asyncfs.readFile(`${cacheFolder}/${id}.html`, "utf-8");
	} catch (err) {
		log.error("Error opening cached file: ", err);
		return undefined;
	}
}

// gets file from cache if it exists,
// otherwise it downloads the file from the internet.
async function getPage(id) {
	try {
		let page = "";
		if (isCached(id)) {
			avg.add(1);
			page = await getCached(id);
		}
		if (!page) {
			avg.add(0);
			page = await generatePage(id);
			saveFile(id, page);
		}
		log.info(`${Number(((await avg.average()) * 100).toFixed(4))}% cached`);
		return page;
	} catch (err) {
		log.error(`Error in page load ${err}`);
	}
}

module.exports = {
	getPage,
	getCached,
	getWiki,
};
