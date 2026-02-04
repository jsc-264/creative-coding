function drawFace(x, y, d) {
  push()
  translate(x, y)
  circle(0, 0, d) // head
  circle(-d / 5, -d / 5, d / 5) // left eye
  circle(d / 5, -d / 5, d / 5) // right eye

  arc( 0, d / 8, 2 * d / 5, 2*d / 5, 0, -PI) // smile
  pop()
}

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER)
}

function draw() {
  background(220);

  drawFace(200, 300, 200)
}
