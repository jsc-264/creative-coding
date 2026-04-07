let song;
let processor;
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
  createCanvas(500, 500);
  angleMode(DEGREES)

  song.play();
  processor = new AudioProcessor(song)
}

let vols = []

function draw() {
  colours = {
    bg: color(50),
    fullSpectrum: color(0, 175, 0, 200),
    mids: color(105, 20, 170),
    lows: color(200, 20, 195),
    volumeTimeline: color(230, 180, 50),
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
}
