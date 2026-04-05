let playlist = [];
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

  if (keyCode == RIGHT_ARROW) {
    const index = playlist.indexOf(song)
    song.stop()
    const newIndex = index < playlist.length - 1 ? index + 1 : 0
    song = playlist[newIndex]
    song.play()
    processor = new AudioProcessor(song)
  }

  if (keyCode == LEFT_ARROW) {
    const index = playlist.indexOf(song)
    song.stop()
    const newIndex = index > 0 ? index - 1 : playlist.length - 1
    song = playlist[newIndex]
    song.play()
    processor = new AudioProcessor(song)
  }
}

function preload() {
  playlist.push(loadSound("./music/lucy-in-the-sky-with-diamonds.mp3"))
  playlist.push(loadSound("./music/thank-you-falettinme-be-mice-elf-agin.mp3"))
  playlist.push(loadSound("./music/the-night-we-met.mp3"))
  playlist.push(loadSound("./music/von-dutch.mp3"))
}

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES)

  colours = {
    grey: color(50),
    green: color(0, 175, 0, 200),
    purple: color(105, 20, 170),
    pink: color(200, 20, 195),
    orange: color(230, 180, 50),
  }

  song = playlist[0]
  song.play();
  processor = new AudioProcessor(song)
}

let vols = []

function draw() {
  background(colours.grey);

  if (song.isPlaying()) {
    text("Playing", 10, 20);
  } else {
    text("Paused", 10, 20);
  }

  processor.analyseData()

  processor.showFullSpectrum(0, 3 * height / 4, width, height / 4)
  processor.showLows(width, 0, width, height / 3, 90)
  processor.showMids(width / 4, height / 4, width / 3)
  processor.showVolumeTimeline(0, height / 2, width, height / 2)
}
