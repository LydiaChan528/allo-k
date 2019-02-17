var options = {
	type: "basic",
	title: "Hello There!",
	message: "Made with <3\nThis is a test :)",
	iconUrl: "/icons/favicon_full.png",
};

var audio = new Audio("/sounds/notif_test.mp3");

var reminders = [
	{title: "Sleeep", msg: "Hai", hr: 2, min: 0, img: "/icons/favicon_full.png"},
	{title: "No sleeep", msg: "hola", hr: 2, min: 1, img: "/icons/favicon_full.png"}
];
var ree = "Test";

//get the reminder list
function readData() {
	loadJSON(function(resp) {
		ree = JSON.parse(resp);
		console.log(ree); 
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
