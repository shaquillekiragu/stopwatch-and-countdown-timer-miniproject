const time = document.getElementById("time");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

let [hours, minutes, seconds, centiseconds] = [0, 0, 0, 0];
let watch = null;

function concatZero(timeType) {
  return timeType < 10 ? `0${timeType}` : timeType;
}

function stopwatch() {
  centiseconds++;
  if (centiseconds > 99) {
    centiseconds = 0;
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  time.innerHTML = `${concatZero(hours)}:${concatZero(minutes)}:${concatZero(
    seconds
  )}:${concatZero(centiseconds)}`;
}

function startWatch() {
  if (watch === null) {
    watch = setInterval(stopwatch, 10);
    startButton.innerHTML = "Continue";
  }
}

function stopWatch() {
  if (watch !== null) {
    clearInterval(watch);
    watch = null;
  }
}

function resetWatch() {
  clearInterval(watch);
  hours = 0;
  minutes = 0;
  seconds = 0;
  centiseconds = 0;
  time.innerHTML = `${concatZero(hours)}:${concatZero(minutes)}:${concatZero(
    seconds
  )}:${concatZero(centiseconds)}`;
  watch = null;
  startButton.innerHTML = "Start";
}

startButton.addEventListener("click", () => {
  startWatch();
});

stopButton.addEventListener("click", () => {
  stopWatch();
});

resetButton.addEventListener("click", () => {
  resetWatch();
});
