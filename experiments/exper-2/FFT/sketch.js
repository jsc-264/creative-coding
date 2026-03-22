let song;

function preload() {
  song = loadSound("./song.mp3");
}

function setup() {
  createCanvas(400, 400);
  song.play();
}

function draw() {
  background(220);

  if (song.isPlaying()) {
    text("Playing", 10, 20);
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
