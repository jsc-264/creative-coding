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
    wave(spectrum, 100, 100, width/2, 50)
  } else {
    text("Paused", 10, 20);
    wave(spectrum) 
  }
}

function wave(spectrum, x, y, w, h) {
  const ampW = w / spectrum.length

  push()
  translate(x, y)

  for (let i = 0; i < spectrum.length; i++) {
    const amp = spectrum[i];
    const ampX = ampW * i
    const ampY = map(amp, 0, 256, h, 0);
    rect(ampX, ampY, ampW, h - ampY);
  }
  pop()
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
