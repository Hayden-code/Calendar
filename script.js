var today = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentTime = document.getElementById("currentTime")
var note = document.getElementById("note")


function renderClock() {
    currentTime.innerHTML = today
}

setInterval(renderClock, 1000);






