function drawFace(x, y, d){
  push()
  translate(x, y)

  circle(0, 0, d)
  pop()
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  drawFace(200, 300, 200)
}
