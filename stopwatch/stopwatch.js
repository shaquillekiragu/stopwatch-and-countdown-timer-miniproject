const time = document.getElementById("time");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

let [hours, minutes, seconds, centiseconds] = [0, 0, 0, 0];
let watch = null;

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

  let hrs = hours < 10 ? `0${hours}` : hours;
  let mins = minutes < 10 ? `0${minutes}` : minutes;
  let secs = seconds < 10 ? `0${seconds}` : seconds;
  let centisecs = centiseconds < 10 ? `0${centiseconds}` : centiseconds;

  time.innerHTML = `${hrs}:${mins}:${secs}:${centisecs}`;
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
  startButton.innerHTML = "Start";
  hours = 0;
  minutes = 0;
  seconds = 0;
  centiseconds = 0;
  time.innerHTML = `0${hours}:0${minutes}:0${seconds}:0${centiseconds}`;
  watch = null;
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
