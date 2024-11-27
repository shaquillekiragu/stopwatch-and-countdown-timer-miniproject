const time = document.getElementById("time");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");

let hours = prompt("Hours input:");
let minutes = prompt("Minutes input:");
let seconds = prompt("Seconds input:");

let clock = null;

while (typeof Number(hours) !== "number") {
  hours = prompt(
    "Your hours input is not a number, please enter a whole number"
  );
}
while (typeof Number(minutes) !== "number") {
  minutes = prompt(
    "Your minutes input is not a number, please enter a whole number"
  );
}
while (typeof Number(seconds) !== "number") {
  seconds = prompt(
    "Your seconds input is not a number, please enter a whole number"
  );
}

let hrs = Number(hours);
let mins = Number(minutes);
let secs = Number(seconds);

while (secs > 59) {
  mins++;
  secs -= 60;
}
while (mins > 59) {
  hrs++;
  mins -= 60;
}

let h = hrs < 10 ? `0${hrs}` : hrs;
let m = mins < 10 ? `0${mins}` : mins;
let s = secs < 10 ? `0${secs}` : secs;

time.innerHTML = `${h}:${m}:${s}`;

function timer() {
  if (hours !== 0 && mins !== 0 && secs !== 0) {
    secs--;
    if (secs === -1) {
      secs = 59;
      mins--;
    }
    if (mins === -1) {
      mins = 59;
      hrs--;
    }
  }

  let h = hrs < 10 ? `0${hrs}` : hrs;
  let m = mins < 10 ? `0${mins}` : mins;
  let s = secs < 10 ? `0${secs}` : secs;

  time.innerHTML = `${h}:${m}:${s}`;
}

function startTimer() {
  if (clock === null) {
    clock = setInterval(timer, 1000);
    startButton.innerHTML = "Resume";
  }
}

function pauseTimer() {
  if (clock !== null) {
    clearInterval(clock);
    clock = null;
  }
}

function resetTimer() {
  clearInterval(clock);
  clock = null;
  time.innerHTML = "00:00:00";
  startButton.innerHTML = "Start";
}

startButton.addEventListener("click", startTimer);

pauseButton.addEventListener("click", pauseTimer);

resetButton.addEventListener("click", resetTimer);
