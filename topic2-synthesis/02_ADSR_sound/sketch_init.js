// Anna Xambó
// Creative Audio Programming: Workshop
// https://github.com/axambo/creative-audio-programming-workshop

// Example adapted from: https://p5js.org/reference/#/p5.Env
// Creating an envelope and applying to a sound sample

var attackLevel = 1.0;
var releaseLevel = 0;

var attackTime = 0.001;
var decayTime = 0.2;
var susPercent = 0.2;
var releaseTime = 0.5;

var sound;

var env, triOsc;

function preload(){
  // load sound here
  sound = loadSound("sounds/Prassel_noise_loop_4s.ogg");
}

function setup() {
  var cnv = createCanvas(100, 100);

  textAlign(CENTER);
  text('click to play', width/2, height/2);

  env = new p5.Env();
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.setRange(attackLevel, releaseLevel);


  cnv.mousePressed(playEnv);
}

function playEnv(){
  console.log("hey");
  env.setInput(sound);
  sound.play();
  env.play();
}