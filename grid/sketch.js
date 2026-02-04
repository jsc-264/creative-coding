const DIM = 3
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
      const strokeThickness = map(mouseX, 0, width, 0, tileSize * 0.5)
      strokeWeight(strokeThickness)
      stroke(100, 10, 250, 120)
      fill(200, 0, 100)
      circle(tileSize * i + tileSize/2, tileSize * j + tileSize/2, tileSize * 0.5)
    }
  }
}
