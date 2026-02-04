function drawFace(x, y, d, cols) {
  push()
  translate(x, y)
  noStroke()

  fill(cols.skin)
  circle(0, 0, d) // head

  fill(cols.eyes)

  circle(-d / 5, -d / 5, d / 5) // left eye
  push()
  stroke(0)
  strokeWeight(d/50)
  point(-d / 5, -d / 5, d / 5)
  pop()

  circle(d / 5, -d / 5, d / 5) // right eye
  push()
  stroke(0)
  strokeWeight(d / 50)
  point(d / 5, -d / 5, d / 5)
  pop()

  stroke(cols.lips)
  strokeWeight(d/50)
  noFill()
  arc( 0, d / 10, 2 * d / 5, 2*d / 5, 0, -PI) // smile
  pop()
}

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER)
}

function draw() {
  background(128);

  drawFace(200, 300, 200, {
    skin: color(237, 193, 59),
    eyes: color(87, 151, 212),
    lips: color(179, 34, 94)
  })
}
