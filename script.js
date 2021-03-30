var today = moment().format('MMMM Do YYYY');
var currentTime = document.getElementById("currentTime");
var note = document.getElementById("note");

function revertToToday() {
    currentTime.innerHTML = today;
}

revertToToday();

function changeDate() {
    prompt("Enter Date", "DD/MM/YYYY")
}

function storeNote(time) {
    var userInput = document.getElementById(time).value;
    if (localStorage.getItem(time) !== ''){
        localStorage.removeItem(time);
    }
    window.localStorage.setItem(time, userInput);
}

function getNote(time) {
    var storedNote = localStorage.getItem(time);
    if (storedNote !== ''){
        document.getElementById(time).value = storedNote;
        console.log(storedNote)
    }
}
for (var i = 9; i < 12; i++) getNote(i + "am");
getNote("12pm")
for (var i = 1; i < 6; i++) getNote(i + "pm");

