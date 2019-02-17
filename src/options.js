function recordDefault()
{
  console.log("def");
  chrome.storage.sync.set({
    prof: "default"
  }, function() {});
  function show() {
    document.getElementById("hack_mode").style.visibility= "hidden" ;
  }
  show();
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
}

function recordHackathon()
{
  chrome.storage.sync.set({
    prof: "hackathon"
  }, function() {});
  function show() {
    document.getElementById("hack_mode").style.visibility= "visible" ;
  }
  show();
}


function saveData()
{
  console.log("yeet");
  var hackathon = document.getElementById('hack').value;
  var sleep = document.getElementById('sleep').value;
  var breakfast = document.getElementById('breakfast').value;
  var lunch = document.getElementById('lunch').value;
  var dinner = document.getElementById('dinner').value;

  chrome.storage.sync.set({
    sleep: sleep,
    breakfast: breakfast,
    lunch: lunch,
    dinner: dinner,
    deadline: hackathon,
  }, function() {});
}

document.getElementById('def1').addEventListener('click', recordDefault);
document.getElementById('dead1').addEventListener('click', recordDeadline);
document.getElementById('hack1').addEventListener('click', recordHackathon);
document.getElementById('save_data').addEventListener('click', saveData);
