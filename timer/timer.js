const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("resetButton");
const resetButton = document.getElementById("resetButton");

const clock = null;
let hrs = Number(hours);
let mins = Number(minutes);
let secs = Number(seconds);

if (secs >= 60) {
  secs -= 60;
  mins++;
}

if (mins >= 60) {
  mins -= 60;
  hrs++;
}

function timer() {
  secs--;
  if (secs < 0) {
    secs = 59;
    mins--;
    if (mins < 0) {
      mins = 59;
      hrs--;
    }
  }

  let h = hrs < 10 ? `0${hrs}` : hrs;
  let m = mins < 10 ? `0${mins}` : mins;
  let s = secs < 10 ? `0${secs}` : secs;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
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
    clock === null;
  }
}

function resetTimer() {
  clearInterval(clock);
  hours.innerHTML = "00";
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
  clock = null;
}

startButton.addEventListener("click", () => {
  startTimer();
});

pauseButton.addEventListener("click", () => {
  pauseTimer();
});

resetButton.addEventListener("click", () => {
  resetTimer();
});
