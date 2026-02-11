const DIM = 15
let tileSize

function setup() {
  createCanvas(600, 600);

  tileSize = width / DIM
}

function draw() {
  background(220);

  for (let i = 0; i < DIM; i++) {
    for (let j = 0; j < DIM; j++) {
      rect(tileSize * i, tileSize * j, tileSize)
    }
  }
}
