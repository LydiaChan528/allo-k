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

//get the reminder list
function readData() {
	console.log("Read data!");
}
