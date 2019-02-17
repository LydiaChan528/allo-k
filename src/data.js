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
	loadJSON(function(resp) {
		var parseObj = JSON.parse(resp);
		console.log(parseObj);
		var prof = "default";
		setTimeReminders = parseObj[prof]["setTimes"];
		intervalReminders = parseObj[prof]["interval"];
		oneOffReminders = parseObj[prof]["oneOff"];
		console.log(setTimeReminders);
		console.log(intervalReminders);
		console.log(oneOffReminders);

		//used for loadTimers()
		callback();
	});
	console.log("Read data!");
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
