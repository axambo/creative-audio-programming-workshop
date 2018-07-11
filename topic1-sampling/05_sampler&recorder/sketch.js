// Anna Xambó
// Creative Audio Programming: Workshop
// https://github.com/axambo/creative-audio-programming-workshop

// Sampler and recorder: 
// sampler of four sounds (keys 'a', 'w', 'd', 'x')
// recorder (keys 'spacebar' to record/stop recording/reset recording, and 'm' to play the recorded sound

var sound1, sound2, sound3, sound4;
var isLooping;
var bgvalue = 255;
var mic, recorder, soundFile;
var state = 0;

function preload(){
  // load sound here
  sound1 = loadSound("sounds/Drop Coin.ogg", loaded);
  sound2 = loadSound("sounds/psi_35.ogg", loaded);
  sound3 = loadSound("sounds/SFX_Jump_10.ogg", loaded);
  sound4 = loadSound("sounds/Synth Bass 016.ogg", loaded);
}

function setup(){
  createCanvas(400, 400);
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

  text('SpaceBar to record', 20, 20);
}

function draw(){
  background(bgvalue);
}

function loaded() {
  console.log("loaded");
  sound1.playMode('restart');
  sound2.playMode('restart');
  sound3.playMode('restart');
  sound4.playMode('restart');
  isLooping = 0;
}

function keyPressed() {
  if (keyCode === 65) {
        console.log("a");
        sound1.play();
        bgvalue = random(1, 255);
    } else if (keyCode === 87) {
        console.log("w");
        sound2.play();
        bgvalue = random(1, 255);
    } 
    else if (keyCode === 68) {
        console.log("d");
        sound3.play();
        bgvalue = random(1, 255);
    } else if (keyCode === 88) {
        console.log("x");
        sound4.play();
        bgvalue = random(1, 255);
    } else if (keyCode === 32) {
      console.log("SPACE");
      // make sure user enabled the mic
      if (state === 0 && mic.enabled) {

        // record to our p5.SoundFile
        recorder.record(soundFile);

        background(255,0,0);
        console.log('Recording!');
        state++;
      } else if (state === 1) {
        console.log('Stopped recording!');
        background(0,255,0);
        // stop recorder and
        // send result to soundFile
        recorder.stop();
        state++;
      } else if (state > 1) {
        console.log("state reset");
        state = 0;
      }

    } else if (keyCode === 77){
        console.log("m");
        soundFile.play(); // play the result!     
    }


}

