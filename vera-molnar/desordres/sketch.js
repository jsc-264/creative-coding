const DIM = 10
let w

function randomSquare(x, y, w, randFactor = 2) {
  const r = w / 2
  beginShape()
  // top edge
  vertex(x - r + random(-randFactor, randFactor), y - r + random(-randFactor, randFactor))
  vertex(x + r + random(-randFactor, randFactor), y - r + random(-randFactor, randFactor))

  // right edge
  vertex(x + r + random(-randFactor, randFactor), y + r + random(-randFactor, randFactor))

  // bottom edge
  vertex(x - r + random(-randFactor, randFactor), y + r + random(-randFactor, randFactor))
  endShape(CLOSE)
}

function drawSquare(x, y, w) {
  const layers = random(6, 8)

  noFill()
  rect(x, y, w)

  for (let i = 0; i < layers; i++) {
    if (random(1) < 0.7) {

      // map layer to scale of square
      const div = map(i, 0, layers, 1.2, 6)
      const scl = w / div

      push()
      translate(x, y)
      rotate(random(-20 / layers, 20 / layers))
      randomSquare(0, 0, scl)
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

  // loop through every square on canvas
  for (let i = 0; i < DIM; i++) {
    for (let j = 0; j < DIM; j++) {
      const x = w * i + w / 2
      const y = w * j + w / 2
      drawSquare(x, y, w)
    }
  }

  noLoop()
}

function keyPressed() {
  if (key == " ") {
    redraw()
  }
}
