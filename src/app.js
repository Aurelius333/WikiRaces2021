// Express Js, for Server hosting
const express = require("express");
const app = express();
const path = require("path");

// BodyParser, for parsing post requests
const bodyParser = require("body-parser");

// Bunyan, for logging
const bunyan = require("bunyan");
const bunyanOpts = {
	name: "WikiRaces",
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

// My average library, so I can see how long pages are taking
const stats = require("./game/stats");
const avg = new stats.Average();

// Custom functions for generating Wikipedia pages
const dynamic = require("./game/dynamic");

log.info("Server Started");

// My code to interact with the database.
// `db` is not the same as mongodb's `db`
const { Database } = require("./game/database");
const db = new Database();

// Start Server Code: ---------------

// dynamically generate urls
app.get("/wiki/:id", async (req, res) => {
	const start = new Date();
	const page = await dynamic.getPage(req.params.id);

	res.send(page);

	const end = new Date();
	const seconds = (end.getTime() - start.getTime()) / 1000;
	avg.add(seconds);
	log.info(`Received ${req.params.id} in ${seconds} seconds.`);

	let average = await avg.average();
	if (average >= 0.7) {
		log.warn(`Average time is ${average} seconds.`);
	} else {
		log.info(`Average time is ${average} seconds.`);
	}
});

// include static game files
app.use("/", express.static(__dirname + "/game/game_static"));
app.use("/wiki-races/", express.static(__dirname + "/game/game_static"));

// redirect user to /wiki-races
app.get("/", (req, res) => {
	res.redirect("/wiki-races");
});

let clientCount = 1;
app.get("/wiki-races/game/*", (req, res) => {
	log.warn(`Game client #${clientCount} loaded.`);
	clientCount++;
	// Send game client
	res.sendFile(path.join(__dirname + "/game/index.html"));
});

// main page
app.get("/wiki-races", (req, res) => {
	res.sendFile(path.join(__dirname + "/game/homepage.html"));
});

// main page
app.get("/wiki-races/date", (req, res) => {
	const time = new Date();
	res.send(time.toISOString());
});

// take user submissions:
// app.use(
// 	express.urlencoded({
// 		extended: true,
// 	})
// );

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/submit", (req, res) => {
	log.info(`Received post request: ${req.body.username}`);
	log.info(`Received post request body: ${JSON.stringify(req.body)}`);
	res.end();
});

app.post("/submit-username", (req, res) => {
	log.info(`Received name: ${req.body.name}`);
	log.info(`Received username body: ${JSON.stringify(req.body)}`);
	const user = req.body;
	db.saveUser(user.name, user.userId, user.time);
	res.end();
});

// Other routes here
app.get("*", (req, res) => {
	res.send(`Sorry, this is an invalid URL. `);
});

app.listen(8443);
