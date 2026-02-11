const DIM = 10
let w

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER)
  angleMode(DEGREES)

  w = width / DIM
}

function draw() {
  background(220);

  for (let i = 0; i < DIM; i++) {
    for (let j = 0; j < DIM; j++) {
      const x = w * i + w / 2
      const y = w * j + w / 2
      drawSquare(x, y, w)
    }
  }

  noLoop()
}
