let tileImages
let tiles;
const DIM = 10

function preload() {
  tileImages = [
    loadImage("./assets/truchet-tl-br.svg"),
    loadImage("./assets/truchet-tr-bl.svg")
  ]
}

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)

  tileSize = width / DIM

  tiles = new Array(DIM)

  for (let i = 0; i < DIM; i++) {
    tiles[i] = new Array(DIM).fill(0)
  }

  for (let i = 0; i < DIM; i++) {
    for (let j = 0; j < DIM; j++) {
      tiles[i][j] = random(tileImages)
    }
  }
}

function draw() {
  background(220);
}
