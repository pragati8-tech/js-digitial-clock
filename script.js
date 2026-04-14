// selection all time containers
const hourDisplay = document.querySelector("#hour");
const minuteDisplay = document.querySelector("#min");
const secondDisplay = document.querySelector("#sec");
const ampmDisplay = document.querySelector("#ampm");

// selection all date containers
const dateDisplay = document.querySelector("#date");
const monthDisplay = document.querySelector("#month");
const yearDisplay = document.querySelector("#year");

let fullDate = new Date();

let hour = "00";
let min = "00";
let sec = "00";
let ampm = "ampm";

setInterval(() => {
    fullDate = new Date();
    hour = String(fullDate.getHours()).padStart(2, "0");
    min = String(fullDate.getMinutes()).padStart(2, "0");
    sec = String(fullDate.getSeconds()).padStart(2, "0");
    ampm = hour >= 12 ? 'PM' : 'AM';

    hourDisplay.innerHTML = hour;
    minuteDisplay.innerHTML = min;
    secondDisplay.innerHTML = sec;
    ampmDisplay.innerHTML = ampm;
}, 1000);

hourDisplay.innerHTML = hour;
minuteDisplay.innerHTML = min;
secondDisplay.innerHTML = sec;
ampmDisplay.innerHTML = ampm;

// getting current date
let date = fullDate.getDate();
let month = fullDate.toLocaleString('default', { month: 'long' });;
let year = fullDate.getFullYear();


// setting date to the date container
dateDisplay.innerHTML = date;
monthDisplay.innerHTML = month;
yearDisplay.innerHTML = year;