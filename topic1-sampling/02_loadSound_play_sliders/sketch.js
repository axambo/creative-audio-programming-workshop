// Anna Xambó
// Creative Audio Programming: Workshop
// https://github.com/axambo/creative-audio-programming-workshop

// Basic control of playing a sound with sliders, preload method with successCallback function

  var sound;
  var soundDur;
  var sliderVolume;
  var sliderRate;
  var sliderPan;
  var button;

  function setup(){
    createCanvas(400, 200);
    sound = loadSound("sounds/Prassel_noise_loop_4s.ogg", loaded);
    sliderVolume = createSlider(0, 1, 0.5, 0.1);
    sliderRate = createSlider(0, 1, 0.5, 0.01);
    sliderPan = createSlider(-1, 1, 0, 0.01);
    sliderVolume.position(20, 20);
    sliderRate.position(20, 50);
    sliderPan.position(20, 80);
    button = createButton("randomize");
    button.mousePressed(randomize);
    button.position(20, 140);
  }

  function loaded() {
    sound.play();
    soundDur = sound.duration();
    sound.setLoop(true);
  }

  function draw(){
    background(255);
    sound.setVolume(sliderVolume.value());
    sound.rate(sliderRate.value());
    sound.pan(sliderPan.value());
    text("vol: " + sliderVolume.value(), sliderVolume.x * 2 + sliderVolume.width, 35);
    text("rate: " + sliderRate.value(), sliderRate.x * 2 + sliderRate.width, 65);
    text("pan: " + sliderPan.value(), sliderPan.x * 2 + sliderPan.width, 95);
  }

  function randomize(){
    var randPlayhead = random(1, soundDur);
    sound.jump(randPlayhead);
    console.log("jumping to..." + randPlayhead);
  }
