let song;
let fft;

function preload() {
  song = loadSound("./song.mp3");
}

function setup() {
  createCanvas(400, 400);
  song.play();

  fft = new p5.FFT(0.5, 128);
  fft.setInput(song)
  fill(0)
  noStroke()
}

function draw() {
  background(220);

  if (song.isPlaying()) {
    text("Playing", 10, 20);

    const spectrum = fft.analyze()

    const w = width / spectrum.length

    for (let i = 0; i < spectrum.length; i++) {
      let amp = spectrum[i];
      let x = w * i
      let y = map(amp, 0, 256, height, 0);
      rect(x, y, w, height-y);
    }

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
