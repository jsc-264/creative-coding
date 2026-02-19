let offsets = {
  triangleX: 1
}

function drawTriangle(x, y, size = 150) {
  const points = {
    a: createVector(0, 0),
    b: createVector(size, 0),
    c: createVector(size / 2, -(size * sqrt(3)) / 2),
  }

  let weight = map(noise(offsets.triangleX), 0, 1, 1, 7)

  push()

  translate(x - size / 2, y + size / 2)
  noFill()
  strokeWeight(weight)
  stroke(255)
  triangle(
    points.a.x, points.a.y,
    points.b.x, points.b.y,
    points.c.x, points.c.y,
  )
  pop()
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  drawTriangle(width / 2, height / 4)

  offsets.triangleX += 0.01
}
