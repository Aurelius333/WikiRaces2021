// superagent to get wikipedia pages
const superagent = require('superagent');

// Bunyan, for logging
const bunyan = require('bunyan');
const bunyanOpts = {
    name: 'DynamicGeneration',
    streams: [
        {
            level: 'debug',
            stream: process.stdout
        },
        {
            level: 'info',
            path: '/var/tmp/WikiRaces.json'
        }
    ]
};
const log = bunyan.createLogger(bunyanOpts);

// fs, for caching files
const fs = require('fs');
const asyncfs = require('fs').promises;

// jsdom to create and modify the page
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// basic html and css
const htmlTemplate = require("./template").htmlTemplate

async function getWiki(id) {
    try {
        const response = await superagent.get(`https://en.wikipedia.org/wiki/${id}`);
        log.info(`Downloaded ${id}`);
        return response.text;
    } catch (error) {
        log.warn(error);
        return undefined;
    }
}

function tryRemoveClass(name, dom) {
    const ele = dom.window.document.getElementsByClassName(name)[0];
    if (ele) {
        ele.remove();
    }
}

function tryRemoveId(id, dom) {
    const ele = dom.window.document.getElementById(id)
    if (ele) {
        ele.remove();
    }
}

async function generatePage(id) {
    const dom = new JSDOM(htmlTemplate);
    const document = dom.window.document
    const page = await getWiki(id);
    if (!page) { return "This page does not exist." }
    let content = dom.window.document.getElementById("content");
    // set page
    content.innerHTML = page;

    tryRemoveId("mw-navigation", dom)
    // tryRemoveId("mw-head", dom)

    tryRemoveId("mw-hidden-catlinks", dom)
    tryRemoveId("footer", dom)
    tryRemoveId("catlinks", dom)
    tryRemoveId("mw-indicator-pp-default", dom)
    tryRemoveId("mw-indicator-pp-autoreview", dom)
    tryRemoveId("References", dom)

    tryRemoveClass("authority-control", dom)
    tryRemoveClass("printfooter", dom)
    tryRemoveClass("sistersitebox", dom)

    // Remove references
    const refs = document.getElementsByClassName("reflist")
    if (refs) {
        for (let i = 0; i < refs.length; i++) {
            refs[i].remove()
        }
    }

    // add logo and text to top left of page
    const image = document.createElement("img")
    image.src = "../logo.png"
    image.style.height = "95px"
    const text = document.createElement("h1")
    text.textContent = "Wiki Races 2021"
    text.style.borderBottom = "0"
    text.style.padding = "35px"
    const heading = document.getElementById("mw-head-base")
    heading.style.height = "100px"
    heading.style.display = "flex"
    heading.style.flexDirection = "row"
    heading.append(image)
    heading.append(text)

    return dom.serialize();
}

// make folder if none exists
const cacheFolder = "./game/cache"
if (!fs.existsSync(cacheFolder)) {
    fs.mkdirSync(cacheFolder);
}

// save file to cache
async function saveFile(id, content) {
    fs.writeFile(`${cacheFolder}/${id}.html`, content, (err) => {
        if (err) return log.error(err);
        log.info(`saved ${id} to cache.`);
    });
}

function isCached(id) {
    return fs.existsSync(`${cacheFolder}/${id}.html`)
}

// get file from cache, or return undefined
async function getCached(id) {
    try {
        log.info(`read ${id} from cache`);
        return asyncfs.readFile(`${cacheFolder}/${id}.html`, "utf-8");
    } catch (e) {
        log.error("Error opening cached file: ", e);
        return undefined
    }
}

// gets file from cache if it exists,
// otherwise it downloads the file from the internet.
async function getPage(id) {
    let page = "";
    if (isCached(id)) {
        page = await getCached(id)
    }
    if (!page) {
        page = await generatePage(id)
        saveFile(id, page)
    }
    return page
}

module.exports = {
    getPage
}