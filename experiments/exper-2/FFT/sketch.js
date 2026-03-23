let song;
let fft;
let paused = false;

function wave(spectrum, coords, dim, col) {
  const bins = spectrum.length
  const ampW = dim.w / bins

  push()
  translate(coords.x, coords.y)

  for (let i = 0; i < bins; i++) {
    const amp = spectrum[i];
    const ampX = ampW * i
    const ampY = map(amp, 0, 256, dim.h, 0);
    noStroke()
    fill(col)
    rect(ampX, ampY, ampW, dim.h - ampY);
  }
  pop()
}

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
  song.play();

  fft = new p5.FFT(0.8, 1024);
  fft.setInput(song)
}

function draw() {
  background(50);

  const spectrum = fft.analyze()

  if (song.isPlaying()) {
    text("Playing", 10, 20);
  } else {
    text("Paused", 10, 20);
  }

  wave(spectrum, {
    x: 0,
    y: 0
  }, {
    w: width,
    h: height
  }, color(0, 175, 0))
}
