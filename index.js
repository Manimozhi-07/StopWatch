const display = document.querySelector(".display");
let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;

function stopWatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }
  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }
  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }
  if (hours < 10) {
    displayHours = "0" + hours.toString();
  } else {
    displayHours = hours;
  }
  display.innerHTML =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

const start_btn = document.querySelector("#start");
const stop_btn = document.querySelector("#stop");
const reset_btn = document.querySelector("#reset");

start_btn.addEventListener("click", () => {
  interval = window.setInterval(stopWatch, 1);
});

stop_btn.addEventListener("click", () => {
  window.clearInterval(interval);
 
});
reset_btn.addEventListener("click", () => {
  window.clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  display.innerHTML = "00:00:00";
});
