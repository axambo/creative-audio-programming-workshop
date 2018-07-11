// Anna Xambó
// Creative Audio Programming: Workshop
// https://github.com/axambo/creative-audio-programming-workshop

// Example from: https://p5js.org/reference/#/p5.Env
// Creating an envelope and applying it as the amplitude of and oscillator

var attackLevel = 1.0;
var releaseLevel = 0;

var attackTime = 0.001;
var decayTime = 0.2;
var susPercent = 0.2;
var releaseTime = 0.5;

var env, triOsc;


function setup() {
  var cnv = createCanvas(100, 100);

  textAlign(CENTER);
  text('click to play', width/2, height/2);

  env = new p5.Env();
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.setRange(attackLevel, releaseLevel);

  triOsc = new p5.Oscillator('triangle');
  // set the amplitude of the oscillator to the env object
  // set the frequency of the oscillator to 220
  triOsc.start();

  cnv.mousePressed(playEnv);
}

function playEnv(){
  console.log("playEnv");
  env.play();
}