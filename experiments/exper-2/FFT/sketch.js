let song;
let processor;
let paused = false;
let colours = {}
let hu = 0
let hues = [
  0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330
]

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
  createCanvas(500, 500);
  angleMode(DEGREES)
  colorMode(HSB)

  song.play();
  processor = new AudioProcessor(song)
}

let vols = []

function draw() {
  colours = {
    bg: color(0, 0, 40),
    fullSpectrum: color((hu + 12) % 360, 100, 75),
    mids: color((hu + 30) % 360, 100, 75),
    lows: color((hu + 24) % 360, 100, 75),
    volumeTimeline: color((hu + 3) % 360, 100, 75),
  }

  background(colours.bg);

  if (song.isPlaying()) {
    text("Playing", 10, 20);
  } else {
    text("Paused", 10, 20);
  }

  processor.analyseData()

  processor.showFullSpectrum(0, 3 * height / 4, width, height / 4, colours.fullSpectrum)
  processor.showLows(width, 0, width, height / 3, 90, colours.lows)
  processor.showMids(width / 4, height / 4, width / 3, colours.mids)
  processor.showVolumeTimeline(0, height / 2, width, height / 2, colours.volumeTimeline)

  hu = map(processor.currentVolume, 0, 255, 0, 360)
}
