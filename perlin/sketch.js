let x, y
let xoff = 1
let yoff = 2

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);
  x = noise(xoff) * width
  y = noise(yoff) * width

  noStroke()
  circle(x, y, 40, 40)

  xoff += 0.02
  yoff += 0.02
}
