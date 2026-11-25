// App code (to be written by the students).
// This only binds UI events to the DrumMachineAPI functions.

// Association between each key and its sound file.
var sounds = {
  Q: "sounds/kick.mp3",
  W: "sounds/snare.mp3",
  E: "sounds/hihat.mp3",
  A: "sounds/clap.mp3",
  S: "sounds/tom.mp3",
  D: "sounds/rim.mp3",
};

// Interaction: keyboard
document.addEventListener("keydown", function (e) {
  var key = e.key.toUpperCase();
  if (sounds[key]) play(sounds[key]);
});

// Recording controls
document.getElementById("recordBtn").addEventListener("click", function () {
  startRecording();
});

document.getElementById("stopBtn").addEventListener("click", function () {
  stopRecording();
});

document.getElementById("playBtn").addEventListener("click", function () {
  playRecording();
});
