console.log("Haiii!");

var options = {
	type: "basic",
	title: "Hello There!",
	message: "Made with <3",
	iconUrl: "icons/TreeHacks-white-48.png"
};

alert("Hi"); 
chrome.notifications.create(options, callback);

function callback() {
	console.log("Notified!");
}

document.addEventListener('DOMContentLoaded', function () {
	var links = document.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		(function () {
			var ln = links[i];
			var location = ln.href;
			ln.onclick = function () {
			chrome.tabs.create({active: true, url: location});
			};
		})();
	}
});
