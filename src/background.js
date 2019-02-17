var options = {
	type: "basic",
	title: "Hello There!",
	message: "Made with <3",
	iconUrl: "/icons/TreeHacks-white-32.png"
};

alert("Hi");
var t = setInterval(showNotif, 2000);

function showNotif() {
	chrome.notifications.create(options, callback);
}

function callback() {
	console.log("Notified!");
}

