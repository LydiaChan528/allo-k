alert("Starting MadeCafe...");

//test notif
audio.play();
chrome.notifications.create(options, notifBack);

//open options if this is first install
chrome.runtime.onInstalled.addListener(function(object) {
	console.log("Installed!");
	chrome.tabs.create({'url': "/src/options.html" });
});

//reinstantiates reminders if options changed
chrome.storage.onChanged.addListener(function(changes, areaName) {
	console.log("User made changes!");
	clearTimers();
	readData(loadTimers);
});

var setTimes = "def";
var intervals = "def";
var oneOffs = "def";
readData(loadTimers);

function loadTimers() {
	setTimes = setInterval(function() {
		var d = new Date();
		var h = d.getHours();
		var m = d.getMinutes();
		setTimeReminders.map(function(r) {
			if(h == r.hr && m == r.min) {
				audio.play();
				options.title = r.title;
				options.message = r.msg;
				options.iconUrl = r.img;
				chrome.notifications.create(options, notifBack);
			}
		});
	}, 60000);
	intervals = intervalReminders.map(function(i) {
		return setInterval(function() {
			options.title = i.title;
			options.message = i.msg;
			options.iconUrl = i.img;
			chrome.notifications.create(options, notifBack);
		}, i.min*60000);
	});
	oneOffs = oneOffReminders.map(function(o) {
		return setTimeout(function() {
			options.title = o.title;
			options.message = o.msg;
			options.iconUrl = o.img;
			chrome.notifications.create(options, notifBack);
		}, o.hr*3600000);
	});
}

function clearTimers() {
	clearTimeout(setTimes);
	intervals.map(function(i) { clearTimeout(i)});
	oneOffs.map(function(o) { clearTimeout(o)});
}

//debug
function notifBack() {
	console.log("Notified!");
}
