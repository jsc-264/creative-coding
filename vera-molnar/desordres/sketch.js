let DIM
let w

function randomSquare(x, y, w, randFactor = 2){
  const r = w/2
  beginShape()
  vertex(x-r+random(-randFactor, randFactor), y-r+random(-randFactor, randFactor))
  vertex(x+r+random(-randFactor, randFactor), y-r+random(-randFactor, randFactor))
  vertex(x+r+random(-randFactor, randFactor), y+r+random(-randFactor, randFactor))
  vertex(x-r+random(-randFactor, randFactor), y+r+random(-randFactor, randFactor))
  endShape(CLOSE)
}

function drawSquare(x, y, w) {
  const layers = random(6, 8)

  noFill()
  rect(x, y, w)

  for (let i = 0; i < layers; i++) {
    if (random(1) < 0.7) {

      const div = map(i, 0, layers, 1.2, 6)
      const scl = w / div

      push()
      translate(x, y)
      rotate(random(-20 / layers, 20 / layers))
      randomSquare(0, 0, w / div)
      pop()
    }
  }
}

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER)
  angleMode(DEGREES)
  
  DIM = floor(random(10, 20))
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
