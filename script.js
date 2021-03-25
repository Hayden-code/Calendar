var today = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentTime = document.getElementById("currentTime")

function renderClock() {
    currentTime.innerHTML = today
}



setInterval(renderClock, 1000);



