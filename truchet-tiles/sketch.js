let tileImages
let tiles;
const DIM = 10
let i = 0
let j = 0

function preload() {
  tileImages = [
    loadImage("./assets/truchet-tl-br.svg"),
    loadImage("./assets/truchet-tr-bl.svg")
  ]
}

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
  // frameRate(5)

  tileSize = width / DIM

  tiles = new Array(DIM)

  for (let i = 0; i < DIM; i++) {
    tiles[i] = new Array(DIM).fill(0)
  }

  // for (let i = 0; i < DIM; i++) {
  //   for (let j = 0; j < DIM; j++) {
  //     tiles[i][j] = random(tileImages)
  //   }
  // }

  background(220);
}

function draw() {

  const tile = random(tileImages)
  tiles[i][j] = tile

  image(tiles[i][j], tileSize * i, tileSize * j, tileSize, tileSize)

  i++

  if (i > DIM - 1) {
    i = 0
    j++
  }

  if (j > DIM - 1) {
    noLoop()
    print("done")
  }
}
