const DIM = 4
let tileSize

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER)

  tileSize = width / DIM
}

function draw() {
  background(220);

  for (let i = 0; i < DIM; i++) {
    for (let j = 0; j < DIM; j++) {
      noFill()
      square(tileSize * i + tileSize/2, tileSize * j + tileSize/2, tileSize * 0.9)
    }
  }
}
