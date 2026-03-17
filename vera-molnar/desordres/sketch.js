const DIM = 13
let w

function randomSquare(x, y, w, randFactor = 1) {
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
  const layers = random(5, 8)

  noFill()
  rect(x, y, w)

  for (let i = 1; i <= layers; i++) {
    const scl = i * (w / layers)

    const weight = random(0.5, 2.5)

    if (random(1) < 0.7) {
      push()
      translate(x, y)
      strokeWeight(weight)
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
