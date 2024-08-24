const time = document.getElementById("time");

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

  let hrs = hours < 10 ? Number(`0${hours}`) : hours;
  let mins = minutes < 10 ? Number(`0${minutes}`) : minutes;
  let secs = seconds < 10 ? Number(`0${seconds}`) : seconds;
  let centisecs = centiseconds < 10 ? Number(`0${centiseconds}`) : centiseconds;

  time.innerHTML = `${hrs}:${mins}:${secs}:${centisecs}`;
}

function startWatch() {
  if (watch === null) {
    watch = setInterval(stopwatch, 10);
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
  time.innerHTML = `0${hours}:0${minutes}:0${seconds}:0${centiseconds}`;
  watch = null;
}
