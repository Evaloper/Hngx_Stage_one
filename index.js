const setTime = new Date();

const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const day = weekday[setTime.getDay()];
const currentDay = document.getElementById("currentDay");
currentDay.innerHTML = day;

function updateTime() {
    const currentTime = document.getElementById("currentTime");

    function updateUTCTime() {
        const currentUTCTime = new Date().getTime();

        // const hours = setTime.getUTCHours();
        // const minutes = setTime.getUTCMinutes();
        // const seconds = setTime.getUTCSeconds();
        // const milliseconds = setTime.getTime();

        // const actualUTCTime = [`${hours}:${minutes}:${seconds}:${milliseconds}`];
        // currentTime.innerHTML = actualUTCTime;
        currentTime.innerHTML = currentUTCTime;
    }
    updateUTCTime();
    setInterval(updateUTCTime, 1);
}

updateTime();
