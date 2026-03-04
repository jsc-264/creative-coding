let img;

function preload() {
  img = loadImage("parrot.jpeg")
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  image(img, 0, 0)
}
