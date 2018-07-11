// Anna Xambó
// Creative Audio Programming: Workshop
// https://github.com/axambo/creative-audio-programming-workshop

// Adapted example from: https://p5js.org/reference/#/p5.Oscillator
// Every time that we press a button, a new oscillator is randomly generated.
// The button has a toggle state between playing and not playing.

var osc;
var playing = false;
var oscType = ['sine', 'triangle', 'sawtooth', 'square'];
var oscIndex;
var rndAmp;
var rndFreq;
var button;


function setup() {
  createCanvas(200, 200);
  backgroundColor = color(255,0,255);
  osc = new p5.Oscillator();
  button = createButton('play new/pause');
  button.mousePressed(toggle);
  button.position(40,100);
}

function toggle() {
  if (!playing) {
    generateOsc();
    playing = true;
    backgroundColor = color(0,255,255);

  } else {
    osc.amp(0, 0.5);
    playing = false;
    backgroundColor = color(255,0,255);
  }
}

function generateOsc() {

  oscIndex = floor(random(0,3));
  rndAmp = random(0.2,0.8);
  rndFreq = floor(random(100,440));
  console.log(oscType[oscIndex]);  
  console.log("amp: "+rndAmp);
  console.log("freq: "+rndFreq);

  osc.setType(oscType[oscIndex]);
  osc.freq(rndFreq);
  osc.amp(rndAmp);
  osc.start();



}

function draw() {
  background(backgroundColor)
}

