// Anna Xambó
// Creative Audio Programming: Workshop
// https://github.com/axambo/creative-audio-programming-workshop

// Sampler and recorder: 
// sampler of four sounds (keys 'a', 'w', 'd', 'x')
// recorder (keys 'spacebar' to record/stop recording/reset recording, and 'm' to play the recorded sound

var sound1, sound2, sound3, sound4;
var isLooping;
var bgvalue = 0;

function preload(){
  // load sound here
  sound1 = loadSound("sounds/Drop Coin.ogg", loaded);
  sound2 = loadSound("sounds/psi_35.ogg", loaded);
  sound3 = loadSound("sounds/SFX_Jump_10.ogg", loaded);
  sound4 = loadSound("sounds/Synth Bass 016.ogg", loaded);
}

function setup(){
  createCanvas(400, 400);
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
  if (keyCode == 65) {
        console.log("a");
        sound1.play();
        bgvalue = random(1, 255);
    } else if (keyCode == 87) {
        console.log("w");
        sound2.play();
        bgvalue = random(1, 255);
    } else if (keyCode == 68) {
        console.log("d");
        sound3.play();
        bgvalue = random(1, 255);
    } else if (keyCode == 88) {
        console.log("x");
        sound4.play();
        bgvalue = random(1, 255);
    }
}
