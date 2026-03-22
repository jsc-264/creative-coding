let song;
let fft;
const bins = 1024

function preload() {
  song = loadSound("./song.mp3");
}

function setup() {
  createCanvas(400, 400);
  song.play();

  fft = new p5.FFT();
  fft.setInput(song)
}

function draw() {
  background(220);

  if (song.isPlaying()) {
    text("Playing", 10, 20);

    const spectrum = fft.analyze()

  } else {
    text("Paused", 10, 20);
  }
}

function keyPressed() {
  if (key == " ") {
    if (song.isPlaying()) {
      song.pause();
    } else {
      song.play();
    }
  }
}
