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
}

function draw() {
  background(220);
  const spectrum = fft.analyze()

  if (song.isPlaying()) {
    text("Playing", 10, 20);
    wave(spectrum)
  } else {
    text("Paused", 10, 20);
  }
}

function wave(spectrum) {
  for (let i = spectrum.length - 1; i >= 0; i--) {
    let amp = spectrum[i]
    if (amp <= 2) {
      spectrum.splice(i, 1)
    }
  }

  const ampW = width / spectrum.length

  for (let i = 0; i < spectrum.length; i++) {
    let amp = spectrum[i];
    let ampX = ampW * i
    let ampY = map(amp, 0, 256, height, 0);
    rect(ampX, ampY, ampW, height - ampY);
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
