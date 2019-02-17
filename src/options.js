function recordDefault()
{
  console.log("def");
  chrome.storage.sync.set({
    prof: "default"
  }, function() {});
}

function recordDeadline()
{
  chrome.storage.sync.set({
    prof: "deadline"
  }, function() {});
  function show() {
    document.getElementById("hack_mode").style.visibility= "visible" ;
  }
  show();
  console.log("yeet");
}

function recordHackathon()
{
  chrome.storage.sync.set({
    prof: "hackathon"
  }, function() {});
}

function saveData()
{
  chrome.storage.sync.set({
    hackathon: hackathon,
    sleep: sleep,
    breakfast: breakfast,
    lunch: lunch,
    dinner: dinner,
    deadline: deadline,
  }, function() {});
}