alert("Starting MadeCafe...");

chrome.runtime.onInstalled.addListener(function(object) {
	console.log("Installed!");
	chrome.tabs.create({'url': "/src/options.html" });
});

var options = {
	type: "basic",
	title: "Hello There!",
	message: "Made with <3",
	iconUrl: "/icons/favicon_full.png",
};

var rems = [
	{title: "Sleeep", msg: "Hai", hr: 1, min: 3},
	{title: "No sleeep", msg: "hola", hr: 1, min: 4}
];

var a = new Audio("/sounds/notif_test.mp3");

var t = setInterval(showNotif, 2000);

function showNotif() {
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	console.log(d);
	for(var i = 0; i < rems.length; i++) {
		var e = rems[i];
		if(h == e.hr && m == e.min) {
			a.play();
			options.title = e.title;
			options.message = e.msg;
			chrome.notifications.create(options, callback);
		}
	}
}

function callback() {
	console.log("Notified!");
}

