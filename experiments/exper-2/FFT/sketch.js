let song;
let fft;
let paused = false;
let colours = {}

function keyPressed() {
  if (key == " ") {
    paused = !paused

    if (paused) {
      song.pause()
      noLoop()
    } else {
      song.play()
      loop()
    }
  }
}

function preload() {
  song = loadSound("./song.mp3");
}

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES)

  colours = {
    grey: color(50),
    green: color(0, 175, 0),
    purple: color(105, 20, 170),
    pink: color(200, 20, 195),
    orange: color(230, 180, 50)
  }

  song.play();

  fft = new p5.FFT(0.8, 1024);
  fft.setInput(song)
}

function draw() {
  background(colours.grey);

  const spectrum = fft.analyze()
  const frame = new AudioFrame(spectrum)

  if (song.isPlaying()) {
    text("Playing", 10, 20);
  } else {
    text("Paused", 10, 20);
  }

  frame.showFullSpectrum(0, 0, width, height)
  frame.showLows(width, 0, width, height/3, 90)
  frame.showMids(width / 4, height / 4, 200)
}
