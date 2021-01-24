// My code to interact with mongodb.
// `db` is not the same as mongodb's `db`
const { Database } = require("./database");
const db = new Database();

// bunyan, for logging
const bunyan = require("bunyan");
const bunyanOpts = {
	name: "Leaderboard",
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

// fs and path, to read levels.json
const fs = require("fs").promises;
const path = require("path");

const staticFolder = path.join(__dirname, "/game_static/levels.json");

async function getLevelData() {
	const file = await fs.readFile(`${staticFolder}`, "utf-8");
	return JSON.parse(file);
}

async function getLevelNames() {
	return Object.keys(await getLevelData());
}

// gets difference in milliseconds
async function getDateDeltas(open, close) {
	const date = new Date(Date.parse(close) - Date.parse(open));
	return date.getTime();
}

// return level time in milliseconds
async function parseTime(obj) {
	submission = await obj;
	if (submission.levelOpen && submission.submitTime) {
		return await getDateDeltas(submission.levelOpen, submission.submitTime);
	}
	return getLevelDuration(submission.levelName);
}

async function fillInMissing(total, times) {
	const levels = await getLevelData();
	const levelNames = Object.keys(await levels);

	for (levelName of levelNames) {
		if (!times[levelName]) {
			const level = levels[levelName];
			const time = await getDateDeltas(level.startTime, level.endTime);
			times[levelName] = time;
			total += Number(time);
		}
	}
	return [total, times];
}

/*
 * I break getting user times into two steps:
 *   - get all the times of the submitted levels
 *   - add all the times of the non-submitted levels
 *
 * This saves having to loop over the submissions to find
 * a particular object, and means we can get the times by
 * looping over both the submissions and the levelnames once.
 */
async function getUserTimes(userId) {
	const submissions = await db.getCollection(
		{ userId: userId },
		"submissions"
	);
	times = {};
	totalTime = 0;

	for (submission of submissions) {
		time = await parseTime(submission);
		// If there are multiple submissions for one level, choose the shortest one
		if (times[submission.levelName] !== undefined) {
			if (times[submission.levelName] > time) {
				totalTime -= Number(times[submission.levelName]);
				times[submission.levelName] = time;
				totalTime += Number(time);
			}
		} else {
			times[submission.levelName] = time;
			totalTime += Number(time);
		}
	}

	[totalTime, times] = await fillInMissing(totalTime, times);

	return [totalTime, times];
}

async function getUserIds() {
	const users = await db.getUsers();
	let userIds = [];
	for (user of users) {
		userIds.push(user.userId);
	}
	return userIds;
}

async function getLeaderboards() {
	log.info("generated leaderboards");
	const userIds = await getUserIds();

	let leaderboard = [];

	for (id of userIds) {
		const user = await db.getUserById(id);
		const [totalTime, times] = await getUserTimes(id);
		leaderboard.push({
			userId: id,
			name: user.name,
			totalTime: totalTime,
			times: times,
		});
	}

	return leaderboard;
}

async function getLevelsLeaderboards() {
	const levelNames = await getLevelNames();
	let submissions = new Set();
	for (levelName of levelNames) {
		let arr = await db.getSubmissions({ levelName: levelName });
		for (submission of arr) {
			delete submission._id;
		}
		submissions[levelName] = arr;
	}
	return JSON.stringify(submissions);
}

module.exports = { getLeaderboards };
