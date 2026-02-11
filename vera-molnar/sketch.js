const DIM = 10
let w

function drawSquare(x, y, w) {
  const layers = random(4, 6)

  noFill()
  rect(x, y, w)

  for (let i = 0; i < layers; i++) {
    if (random(1) < 0.7) {

      const div = map(i, 0, layers, 1.2, 6)

      push()
      translate(x, y)
      rotate(random(-20 / layers, 20 / layers))
      rect(0, 0, w / div)
      pop()
    }
  }
}

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
