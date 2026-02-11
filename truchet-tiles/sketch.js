let tileImages = []
const DIM = 10

function preload() {
  tileImages = [
    loadImage("./assets/truchet-tl-br.svg"),
    loadImage("./assets/truchet-tr-bl.svg")
  ]
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
