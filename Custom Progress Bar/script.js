let durationInput = document.getElementById("duration");
let currentTimeDisplay = document.getElementById("currentTime");
let totalTimeDisplay = document.getElementById("totalTime");
let progressElement = document.getElementById("myBar");
let progressInterval;

function startProgress() {
  clearInterval(progressInterval);

  let duration = parseInt(durationInput.value, 10);
  let totalWidth = document.querySelector('.progress-container').offsetWidth;
  let increment = totalWidth / duration;

  let currentTime = 0;
  progressInterval = setInterval(function () {
    if (currentTime >= duration) {
      clearInterval(progressInterval);
    } else {
      currentTime++;
      progressElement.style.width = (currentTime * increment) + "px";
      updateDisplay(currentTime, duration);
    }
  }, 1000);
}

function resetProgress() {
  clearInterval(progressInterval);
  progressElement.style.width = "0";
  updateDisplay(0, parseInt(durationInput.value, 10));
}

function updateDisplay(currentTime, duration) {
  currentTimeDisplay.textContent = formatTime(currentTime);
  totalTimeDisplay.textContent = formatTime(duration);
}

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  return `${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(num) {
  return num < 10 ? "0" + num : num;
}
