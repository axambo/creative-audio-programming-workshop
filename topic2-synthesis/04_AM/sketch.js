// Anna Xambó
// Creative Audio Programming: Workshop
// https://github.com/axambo/creative-audio-programming-workshop

// Example modified from https://p5js.org/examples/sound-amplitude-modulation.html

var carrier; // this is the oscillator we will hear
var modulator; // this oscillator will modulate the amplitude of the carrier
var fft; // we'll visualize the waveform

function setup() {
  createCanvas(800,400);
  noFill();
  background(30); // alpha


  carrier = new p5.Oscillator(); // connects to master output by default
  carrier.freq(1000);
  //carrier.amp(0.5);

  carrier.start();

  modulator = new p5.Oscillator('sine'); // you can change to square [], sine ~ or triangle /\
  modulator.disconnect();  // disconnect the modulator from master output
  modulator.freq(400);
  modulator.amp(0.5);
  modulator.start();

  // Modulate the carrier's amplitude with the modulator
  // Optionally, we can scale the signal.
  carrier.amp(modulator.scale(-1,1,0,1)); // In AM synthesis the modulator is unipolar (from 0 to 1)

  // create an fft to analyze the audio
  fft = new p5.FFT();
}

function draw() {
  //background(30,30,30,100); // alpha
  background(200);
  // map mouseX to moodulator freq between 0 and 20hz
  var modFreq = map(mouseX, 0, width, 2, 20000);
  //var modFreq = 400;
  console.log(mouseX);
  modulator.freq(modFreq);

  // map mouseY to carrier freq between 300 and 2000
  //var carFreq = map(mouseY, 1, height, 300, 2000);
  var carFreq = 1000;
  carrier.freq(carFreq); // fade time of 0.1 for smooth fading
  // if there are harmonics in the wave being modulated, each of the harmonics will have
// sidebands as well.

  // analyze the waveform & draw the shape of the waveform
  //drawWaveform();
  drawSpectrum();

  //drawText(modFreq, modAmp);

}

function drawWaveform() {
  // analyze the waveform
  waveform = fft.waveform();
  stroke(240);
  strokeWeight(4);
  beginShape();
  for (var i = 0; i<waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, -height/2, height/2);
    vertex(x, y + height/2);
  }
  endShape();

}

function drawText(modFreq, modAmp) {
  strokeWeight(1);
  text('Modulator Frequency: ' + modFreq.toFixed(3) + ' Hz', 20, 20);
  text('Modulator Amplitude: ' + modAmp.toFixed(3), 20, 40);
  //text('Carrier Frequency: ' + carrierFreq.toFixed(3) + ' Hz', 20, 60);
  //text('Carrier Amplitude: ' + carrierAmp.toFixed(3), 20, 80);
}

function drawSpectrum() {
var spectrum = fft.analyze();
beginShape();
for (i = 0; i<spectrum.length; i++) {
  vertex(i, map(spectrum[i], 0, 255, height, 0) );
}
endShape();
}
