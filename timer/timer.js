const time = document.getElementById("time");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");

let hours = prompt("Hours input:");
let minutes = prompt("Minutes input:");
let seconds = prompt("Seconds input:");

let clock = null;
let hasSetTimer = false;

if (typeof Number(hours) !== "number") {
  while (typeof Number(hours) !== "number") {
    hours = prompt(
      "Your hours input is not a number, please enter a whole number"
    );
  }
}
if (typeof Number(minutes) !== "number") {
  while (typeof Number(minutes) !== "number") {
    minutes = prompt(
      "Your minutes input is not a number, please enter a whole number"
    );
  }
}
if (typeof Number(seconds) !== "number") {
  while (typeof Number(seconds) !== "number") {
    seconds = prompt(
      "Your seconds input is not a number, please enter a whole number"
    );
  }
}

let hrs = Number(hours);
let mins = Number(minutes);
let secs = Number(seconds);

if (secs > 59) {
  while (secs > 59) {
    mins++;
    secs -= 60;
  }
}
if (mins > 59) {
  while (mins > 59) {
    hrs++;
    mins -= 60;
  }
}

let h = hrs < 10 ? `0${hrs}` : hrs;
let m = mins < 10 ? `0${mins}` : mins;
let s = secs < 10 ? `0${secs}` : secs;

time.innerHTML = `${h}:${m}:${s}`;

function timer() {
  if (time.innerHTML === "00:00:00" && !hasSetTimer) {
    clearInterval(clock);
    clock = null;
    startButton.innerHTML = "Start";
    alert(
      "You haven't set a time for the timer. Please click reset and set a time"
    );
  } else if (time.innerHTML === "00:00:00") {
    clearInterval(clock);
    clock = null;
    startButton.innerHTML = "Start";
    hasSetTimer = false;
    alert("Time is up!");
  } else {
    hasSetTimer = true;
    startButton.innerHTML = "Resume";

    secs--;
    if (secs === -1) {
      secs = 59;
      mins--;
      if (mins === -1) {
        mins = 59;
        hrs--;
      }
    }

    h = hrs < 10 ? `0${hrs}` : hrs;
    m = mins < 10 ? `0${mins}` : mins;
    s = secs < 10 ? `0${secs}` : secs;

    time.innerHTML = `${h}:${m}:${s}`;
  }
}

function startTimer() {
  if (clock === null) {
    clock = setInterval(timer, 1000);
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
  time.innerHTML = "00:00:00";
  startButton.innerHTML = "Start";

  clock = null;

  hours = prompt("Hours input:");
  minutes = prompt("Minutes input:");
  seconds = prompt("Seconds input:");
  if (typeof Number(hours) !== "number") {
    while (typeof Number(hours) !== "number") {
      hours = prompt(
        "Your hours input is not a number, please enter a whole number"
      );
    }
  }
  if (typeof Number(minutes) !== "number") {
    while (typeof Number(minutes) !== "number") {
      minutes = prompt(
        "Your minutes input is not a number, please enter a whole number"
      );
    }
  }
  if (typeof Number(seconds) !== "number") {
    while (typeof Number(seconds) !== "number") {
      seconds = prompt(
        "Your seconds input is not a number, please enter a whole number"
      );
    }
  }

  hrs = Number(hours);
  mins = Number(minutes);
  secs = Number(seconds);

  if (secs > 59) {
    while (secs > 59) {
      mins++;
      secs -= 60;
    }
  }
  if (mins > 59) {
    while (mins > 59) {
      hrs++;
      mins -= 60;
    }
  }

  h = hrs < 10 ? `0${hrs}` : hrs;
  m = mins < 10 ? `0${mins}` : mins;
  s = secs < 10 ? `0${secs}` : secs;

  time.innerHTML = `${h}:${m}:${s}`;
}

startButton.addEventListener("click", startTimer);

pauseButton.addEventListener("click", pauseTimer);

resetButton.addEventListener("click", resetTimer);
