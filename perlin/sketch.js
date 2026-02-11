let inc = 0.01
let start = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);

  let offset = start

  noFill()
  stroke(200)
  beginShape()
  for (let x = 0; x < width; x++) {
    const y = noise(offset) * height
    vertex(x, y)

    offset += inc
  }
  endShape()

  start += inc

  // noLoop()
}
