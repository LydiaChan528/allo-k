var options = {
	type: "basic",
	title: "Hello There!",
	message: "Made with <3\nThis is a test :)",
	iconUrl: "/icons/favicon_full.png",
};

var audio = new Audio("/sounds/notif_test.mp3");

var setTimeReminders = "def";
var intervalReminders = "def";
var oneOffReminders = "def";
var syncData = "def";

//get the reminder list
function readData(callback) {
	chrome.storage.sync.get({
		prof: "default",
		sleep: "23:30",
		breakfast: "09:00",
		lunch: "12:00",
		dinner: "18:00",
		deadline: "25000"
	}, function(items) {
		syncData = items;
	});
	loadJSON(function(resp) {
		console.log(syncData);
		//default stuff
		var parseObj = JSON.parse(resp);
		setTimeReminders = parseObj[syncData.prof]["setTimes"];
		intervalReminders = parseObj[syncData.prof]["interval"];
		oneOffReminders = parseObj[syncData.prof]["oneOff"];
		//user options
		if (syncData.prof != "default") {
			oneOffReminders[0].hr = parseFloat(syncData.deadline);
		}
		//ahhh such bad code
		var tim = getTimes(syncData.sleep);
		setTimeReminders[0].hr = tim[0];
		setTimeReminders[0].min = tim[1];
		tim = getTimes(syncData.breakfast);
		setTimeReminders[1].hr = tim[0];
		setTimeReminders[1].min = tim[1];
		tim = getTimes(syncData.lunch);
		setTimeReminders[2].hr = tim[0];
		setTimeReminders[2].min = tim[1];
		tim = getTimes(syncData.dinner);
		setTimeReminders[3].hr = tim[0];
		setTimeReminders[3].min = tim[1];


		console.log(setTimeReminders);
		console.log(intervalReminders);
		console.log(oneOffReminders);

		//used for loadTimers()
		callback();
	});
	console.log("Read data!");
}

function getTimes(str) {
	var res = str.split(":");
	return [parseInt(res[0]), parseInt(res[1])];
}

//https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
function loadJSON(jsonBack) {
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', 'data/data.json', true);
	xobj.onreadystatechange = function () {
		if (xobj.readyState == 4 && xobj.status == "200") {
			jsonBack(xobj.responseText);
		}
	};
	xobj.send(null);
}
