var profi = "default";

function recordDefault()
{
  profi = "default";
  function show() {
    document.getElementById("hack_mode").style.visibility= "hidden" ;
  }
  show();
}

function recordDeadline()
{
  profi = "deadline";
  function show() {
    document.getElementById("hack_mode").style.visibility= "visible" ;
  }
  show();
}

function recordHackathon()
{
  profi = "hackathon";
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
    prof: profi,
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
