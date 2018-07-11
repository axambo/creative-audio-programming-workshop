// Anna Xambó
// Creative Audio Programming: Workshop
// https://github.com/axambo/creative-audio-programming-workshop

// Example modified from https://p5js.org/examples/sound-amplitude-modulation.html
// Thanks to Gerard Roma for advice on the program design. 

var carrier;
var modulator;
var env;
var note;
var keys = {
    'Z':36, 'X':39, 'C':41, 'V':42, 'B':43, 'N':46, 'M':48,
    'A':48, 'S':51, 'D':53, 'F':54, 'G':55, 'H':58, 'J':60, 'K':63, 'L':65,
    'Q':60, 'W':63, 'E':65, 'R':66, 'T':67, 'Y':70, 'U':72, 'I':75, 'O':77,'P':78
}

var modType = "AM";
var modFreq = 100;

function setup() {
    createCanvas(800, 600);
     textSize(100);
     switch(modType){
        case "AM": makeAMSynth(0);break;
        case "RM": makeAMSynth(1);break;
        case "FM": makeFMSynth();break;
     }
}

// scale == classic AM, no scale == ring modulation
function makeAMSynth(scale){
    carrier = new p5.SinOsc();
    modulator = new p5.SinOsc();
    modulator.disconnect();
    if(scale) modulator.scale(-1,1,-1,1);
    env = new p5.Env();
    env.setADSR(0.001, 0.2, 0.2, 0.5);
    env.setInput(carrier, modulator);
    carrier.start();
    modulator.start();
    carrier.amp(modulator);
}



function makeFMSynth(){
    carrier = new p5.SinOsc();
    modulator = new p5.SinOsc();
    modulator.disconnect();
    carrier.freq(modulator);
    env = new p5.Env();
    env.setADSR(0.001, 0.2, 0.2, 0.5);
    env.setInput(carrier);
    carrier.start();
    modulator.start();
}


function draw() {
   background(100);
   modFreq = 1000 * (mouseX / width); // from 0 to 1000 Hz
   if(note)text(
    "key:" + key + "\n"+
    "car freq: "+ parseInt(midiToFreq(note)) +"hz \n" +
    "mod freq: "+ parseInt(modFreq) + "hz",
     20, 300
    );
    modulator.freq(modFreq);
    if(modType == "FM") modulator.amp(1000 * mouseY/height);
}

function keyPressed() {
    note = keys[key];
    if(note){
        carrier.freq(midiToFreq(note))
        env.triggerAttack();
    }
}

function keyReleased() {
    env.triggerRelease();
}


