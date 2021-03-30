var today = moment().format('MMMM Do YYYY');
var currentTime = document.getElementById("currentTime");
var note = document.getElementById("note");

function revertToToday() {
    currentTime.innerHTML = today;
    getNoteLoop();
}

revertToToday();

function changeDate() {
    var userDate = prompt("Enter Date MM/DD/YYYY", "MM/DD/YYYY");
    userDate = moment(userDate).format('MMMM Do YYYY')
    currentTime.innerHTML = userDate;
    getNoteLoop();    
}

function storeNote(time) {
    var userInput = document.getElementById(time).value;
    var key = String(time + " " + currentTime.innerHTML)
    if (localStorage.getItem(time) !== ''){
        localStorage.removeItem(time);
    }
    window.localStorage.setItem(key, userInput);
}

function getNote(time) {
    var key = String(time + " " + currentTime.innerHTML)
    var storedNote = localStorage.getItem(key);
    console.log(storedNote);
    if (storedNote !== ''){
        document.getElementById(time).value = storedNote;
    }

}

function getNoteLoop(){
    for (var i = 9; i < 12; i++) getNote(i + "am");
    getNote("12pm")
    for (var i = 1; i < 6; i++) getNote(i + "pm");
}