const setTime = new Date();
const hours = setTime.getUTCHours();
const minutes = setTime.getUTCMinutes();
const seconds = setTime.getUTCSeconds();
const milliseconds = setTime.getUTCMilliseconds();

const actualUTCTime = [`${hours}:${minutes}:${seconds}:${milliseconds}`]

const currentTime = document.getElementById("currentTime");
currentTime.innerHTML = actualUTCTime.toString();

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day = weekday[setTime.getDay()];
const currentDay = document.getElementById("currentDay");
currentDay.innerHTML = day;