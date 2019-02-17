function save_options() {
	var color = document.getElementById('color').value;
	chrome.storage.sync.set({
		favColor: color
	}, function() {
		var status = document.getElementById('status');
		status.textContent = 'Options saved.';
		setTimeout(function() { status.textContent = '' }, 750);
	});
}

function restore_options() {
	chrome.storage.sync.get({
    favColor: 'red'
	}, function(items) {
		document.getElementById('color').value = items.favColor;
	});
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

//idk what this does, probs just makes sure links work
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
