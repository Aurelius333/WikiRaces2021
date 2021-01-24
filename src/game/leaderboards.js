// My code to interact with mongodb.
// `db` is not the same as mongodb's `db`
const { Database } = require("./database");
const db = new Database();

// fs and path, to read levels.json
const fs = require("fs").promises;
const path = require("path");

const staticFolder = path.join(__dirname, "/game_static/levels.json");
async function getLevelNames() {
	const file = await fs.readFile(`${staticFolder}`, "utf-8");
	return Object.keys(JSON.parse(file));
}

// gets difference in milliseconds
async function getDateDeltas(open, close) {
	const date = new Date(Date.parse(close) - Date.parse(open));
	return date.getTime();
}

// return level time in miliseconds
async function parseTime(obj) {
	submission = await obj;
	if (submission.levelOpen && submission.submitTime) {
		return await getDateDeltas(submission.levelOpen, submission.submitTime);
	}
	return undefined; // replace with time level was open
}

// Should return object containing:
// username
// userid
// sum time
// level times
async function getUserTimes(userId) {
	const submissions = await db.getCollection(
		{ userId: userId },
		"submissions"
	);
	times = {};
	totalTime = 0;
	for (submission of submissions) {
		time = await parseTime(submission);
		times[submission.levelName] = time;
		totalTime += Number(time);
	}
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

	// return leaderboard;
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
