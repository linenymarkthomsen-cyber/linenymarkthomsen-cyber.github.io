// Drum Machine API
// Provides the following features:
// Play/Pause, Recording and Playback.

var audioElements = {};
var isRecording = false;
var recordedEvents = [];
var recordStartTime = null;

// --- Feature: Play / Pause ---

// The parameter file is the filePath of the sound
function play(file) {
  var audio = audioElements[file];
  if (!audio) {
    audio = new Audio(file);
    audioElements[file] = audio;
  }

  audio.currentTime = 0;
  audio.play();

  if (isRecording) {
    var time = performance.now() - recordStartTime;
    recordedEvents.push({ file: file, time: time });
  }
}

function pause(file) {
  var audio = audioElements[file];
  if (audio) audio.pause();
}

// --- Feature: Recording ---

function startRecording() {
  isRecording = true;
  recordedEvents = [];
  recordStartTime = performance.now();
}

// Returns the recorded events: [{ file, time }, ...], needed to save different recordings
function stopRecording() {
  isRecording = false;
  return recordedEvents;
}

// --- Feature: Playback ---

// events defaults to the last recording made
function playRecording(events) {
  if (!events) {
    events = recordedEvents;
  }

  events.forEach(function (event) {
    setTimeout(function () {
      play(event.file);
    }, event.time);
  });
}
