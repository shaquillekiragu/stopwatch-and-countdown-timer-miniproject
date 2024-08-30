const time = document.getElementById("time");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");

console.log(
  hours.value,
  "<< hours ",
  minutes.value,
  "<< minutes ",
  seconds.value,
  "<< seconds "
  //   startButton,
  //   "<< startButton ",
  //   pauseButton,
  //   "<< pauseButton ",
  //   resetButton,
  //   "<< resetButton "
);

let clock = null;

let hrs = Number(hours.value) || 0;
let mins = Number(minutes.value) || 0;
let secs = Number(seconds.value) || 0;

console.log(hrs, "<< hrs", mins, "<< mins", secs, "<< secs");

if (secs >= 60) {
  secs -= 60;
  mins++;
}

if (mins >= 60) {
  mins -= 60;
  hrs++;
}

console.log(hrs, "<< hrs 2", mins, "<< mins 2", secs, "<< secs 2");

let h = hrs < 10 ? `0${hrs}` : hrs;
let m = mins < 10 ? `0${mins}` : mins;
let s = secs < 10 ? `0${secs}` : secs;

time.innerHTML = `${h}:${m}:${s}`;

function timer() {
  secs--;
  if (secs === -1) {
    secs = 59;
    mins--;
  }
  if (mins === -1) {
    mins = 59;
    hrs--;
  }

  //   hrs = hrs < 10 ? `0${hrs}` : hrs;
  //   mins = mins < 10 ? `0${mins}` : mins;
  //   secs = secs < 10 ? `0${secs}` : secs;

  time.innerHTML = `${h}:${m}:${s}`;
}

function startTimer() {
  console.log(
    hours.value,
    "<< hours 2 ",
    minutes.value,
    "<< minutes 2 ",
    seconds.value,
    "<< seconds 2 "
    // startButton,
    // "<< startButton 2 ",
    // pauseButton,
    // "<< pauseButton 2 ",
    // resetButton,
    // "<< resetButton 2 "
  );
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
