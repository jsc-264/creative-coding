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
  createCanvas(400, 400);

  colours = {
    green: color(0, 175, 0)
  }

  song.play();

  fft = new p5.FFT(0.8, 1024);
  fft.setInput(song)
}

function draw() {
  background(50);

  const spectrum = fft.analyze()
  const frame = new AudioFrame(spectrum)

  if (song.isPlaying()) {
    text("Playing", 10, 20);
  } else {
    text("Paused", 10, 20);
  }

  frame.showFullSpectrum(0, 0, width, height, colours.green)
}
