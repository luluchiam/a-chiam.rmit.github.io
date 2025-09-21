// ==========================================================
// 1. Audio REFERENCE
// ==========================================================
const myAudio = document.querySelector("#my-audio");
console.log(myAudio);

// ==========================================================
// 2. PLAY / PAUSE LOGIC
// ==========================================================

// Access play/pause button & icon
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);
const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

// Listen for clicks on play/pause button
playPauseButton.addEventListener("click", toggleAudioMp3);

// Callback function to toggle Audio play/pause state
function toggleAudioMp3() {
  if (myAudio.paused || myAudio.ended) {
    myAudio.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    myAudio.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

// ==========================================================
// 3. MUTE / UNMUTE LOGIC
// ==========================================================

// Access mute/unmute button & icon
const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);
const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

// Listen for clicks on mute/unmute button
muteUnmuteButton.addEventListener("click", toggleAudio);

// Callback function to toggle mute state
function toggleAudio() {
  if (myAudio.muted) {
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/mute--v1.png";
    myAudio.muted = false;
  } else {
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v.png";
    myAudio.muted = true;
  }
}

// ==========================================================
// 4. FAST FORWARD LOGIC
// ==========================================================

// Access fast forward button
const fastForwardButton = document.querySelector("#fast-forward-button");
console.log(fastForwardButton);

// Listen for clicks on fast forward button
fastForwardButton.addEventListener("click", fastForwardAudio);

// Callback function to advance Audio by 5 seconds
function fastForwardAudio() {
  myAudio.currentTime = myAudio.currentTime + 5;
}

// ==========================================================
// 7. PROGRESS BAR LOGIC
// ==========================================================

// Access progress bar
const progressBar = document.querySelector("#progress-bar");
console.log(progressBar);

// Listen for time updates on Audio
myAudio.addEventListener("timeupdate", updateProgress);

// Callback to update progress bar width
function updateProgress() {
  let duration = (myAudio.currentTime / myAudio.duration) * 100;
  progressBar.style.width = duration + "%";
}
