var options = {
	type: "basic",
	title: "Hello There!",
	message: "Made with <3",
	iconUrl: "/icons/favicon_full.png",
};

//alert("Hi");
var t = setInterval(showNotif, 2500);

function showNotif() {
	var d = new Date();
	options.message = "h:" + d.getHours() + " m: " + d.getMinutes() + " s: " + d.getSeconds();
	chrome.notifications.create(options, callback);
}

function callback() {
	//alert("hai there!");
	console.log("Notified!");
}

