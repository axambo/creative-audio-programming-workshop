// Anna Xambó
// Creative Audio Programming: Workshop
// https://github.com/axambo/creative-audio-programming-workshop

// Adapted from example: https://p5js.org/reference/#/p5.SoundRecorder
// Space bar -> Record, stop recording, play buffer from now on
// R -> resets buffer, sets state = 0

var mic, recorder, soundFile;
var state = 0;

function setup() {
  background(200);
  // create an audio in
  mic = new p5.AudioIn();

  // prompts user to enable their browser mic
  mic.start();

  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // connect the mic to the recorder
  recorder.setInput(mic);

  // this sound file will be used to
  // playback & save the recording
  soundFile = new p5.SoundFile();

  text('keyPress to record', 20, 20);
}

function keyPressed() {

  // make sure user enabled the mic
  if (state === 0 && mic.enabled) {

    // record to our p5.SoundFile
    recorder.record(soundFile);

    background(255,0,0);
    text('Recording!', 20, 20);
    state++;
  }
  else if (state === 1) {
    background(0,255,0);

    // stop recorder and
    // send result to soundFile
    recorder.stop();

    text('Stopped', 20, 20);
    state++;
  }

  else if (state > 1) {
    soundFile.play(); // play the result!
    console.log("playing sound...");
    //console.log("saving file...");
    //save(soundFile, 'mySound.wav');
    state++;
  }


}
