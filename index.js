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
        // const actualUTCTime = { hour: 'time', minute: 'time', second: 'time' };
        // const currentUTCTime = new Date().toLocaleTimeString(undefined, actualUTCTime);

        const hours = setTime.getUTCHours();
        const minutes = setTime.getUTCMinutes();
        const seconds = setTime.getUTCSeconds();
        const milliseconds = setTime.getTime();

        const actualUTCTime = [`${hours}:${minutes}:${seconds}:${milliseconds}`];

        currentTime.innerHTML = actualUTCTime;
    }
    updateUTCTime();
    setInterval(updateUTCTime, 1);
}

updateTime();
