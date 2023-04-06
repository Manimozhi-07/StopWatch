const display = document.querySelector(".display");
let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;

let result = "stopped";
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
// const stop_btn = document.querySelector("#stop");
const reset_btn = document.querySelector("#reset");

start_btn.addEventListener("click", () => {
  if (result === "stopped") {
    interval = window.setInterval(stopWatch, 1000);
    start_btn.innerHTML = '<i class="bi bi-pause-fill"></i>';
    start_btn.style.backgroundColor = "red";
    result = "started";
  } else {
    window.clearInterval(interval);
    start_btn.innerHTML = '<i class="bi bi-play-fill"></i>';
    start_btn.style.backgroundColor = "green";
    result = "stopped";
  }
});

// stop_btn.addEventListener("click", () => {
//   window.clearInterval(interval);
// });
reset_btn.addEventListener("click", () => {
  window.clearInterval(interval);
  if (result == "started") {
    start_btn.innerHTML = '<i class="bi bi-play-fill"></i>';
    start_btn.style.backgroundColor = "green";
  }
  result = "stopped";
  seconds = 0;
  minutes = 0;
  hours = 0;
  display.innerText = "00:00:00";
});

const indicator = document.querySelector(".indicator");
const body = document.body;
indicator.addEventListener("click", () => {
  body.classList.toggle("active");
  if (body.classList.contains("active")) {
    indicator.style.backgroundColor = "rgb(230, 229, 229)";
    indicator.style.left = "42px";
  } else {
    indicator.style.backgroundColor = "black";
    indicator.style.left = "0px";
  }
});


