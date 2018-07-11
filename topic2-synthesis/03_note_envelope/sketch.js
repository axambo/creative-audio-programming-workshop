// Anna Xambó
// Creative Audio Programming: Workshop
// https://github.com/axambo/creative-audio-programming-workshop

// Example adapted from: https://p5js.org/examples/sound-note-envelope.html

var osc, envelope;

var scaleArray = [60, 62, 64, 65, 67, 69, 71, 72]; // Try different scales, or not playing all the notes

var note = 0;

function setup() {
  createCanvas(710, 200);
  osc = new p5.SinOsc();

  // Instantiate the envelope
  envelope = new p5.Env();

  // set attackTime, decayTime, sustainRatio, releaseTime
  envelope.setADSR(0.001, 0.5, 0.1, 0.5);

  // set attackLevel, releaseLevel
  envelope.setRange(1, 0);

  osc.start();

  noStroke();
}

function draw() {
  background(20);
  //console.log("frameCount: " +frameCount);
  if (frameCount % 30 == 0 || frameCount == 1) {
    var midiValue = scaleArray[note];
    console.log("midiValue: " +midiValue);
    var freqValue = midiToFreq(midiValue);
    console.log("freqValue: " +freqValue);    
    osc.freq(freqValue);

    envelope.play(osc, 0, 0.1); // params: unit, starttime, sustaintime	
    note = (note + 1) % scaleArray.length;
    console.log("note: " +note);
  }

}
