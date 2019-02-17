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
	readData();
});

//reads reminder data
readData();

//check every minute for reminder
var loop = setInterval(function() {
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	reminders.map(function(r) {
		if(h == r.hr && m == r.min) {
			audio.play();
			options.title = r.title;
			options.message = r.msg;
			options.iconUrl = r.img;
			chrome.notifications.create(options, notifBack);
		}
	});
}, 60000);

//debug
function notifBack() {
	console.log("Notified!");
}
