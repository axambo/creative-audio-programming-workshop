// Anna Xambó
// Creative Audio Programming: Workshop
// https://github.com/axambo/creative-audio-programming-workshop

// Example adapted from: https://p5js.org/reference/#/p5.Amplitude
// and 17.9 Sound Visualization Graphing amplitude by The Coding Train

var sound, amplitude, cnv;
var levelhistory = [];

function preload(){
  sound = loadSound('sounds/178937__laureci__motzstrasse2.mp3');
}
function setup() {
  cnv = createCanvas(400,400);
  amplitude = new p5.Amplitude();

  // start / stop the sound when canvas is clicked
  cnv.mouseClicked(function() {
    if (sound.isPlaying() ){
      sound.stop();
    } else {
      sound.play();
    }
  });
}
function draw() {
  background(0);
  fill(255);
  var level = amplitude.getLevel();
  levelhistory.push(level);
  stroke(255);
  noFill(); // for the vertex
  
  for (var i = 0; i < levelhistory.length; i++) {
    var y = map(levelhistory[i], 0, 1, height, 0);
    point(i, y);
  //   beginShape();
  //   vertex(i, y);
  //     endShape();
  // }


  if (levelhistory.length > width) {
    levelhistory.splice(0, 1);
  }
  //var size = map(level, 0, 1, 0, 400); 
  //ellipse(width/2, height/2, size, size);
}