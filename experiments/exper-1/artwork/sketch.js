let offsets = {
  prismX: 1,
  prismBlurX: 2,
  beamAngleX: 3
}

function objTriangle(points) {
  triangle(
    points.a.x, points.a.y,
    points.b.x, points.b.y,
    points.c.x, points.c.y,
  )
}

function addPrismBlur(center, points) {
  let weight = map(noise(offsets.prismBlurX), 0, 1, 3, 10)

  push()
  drawingContext.filter = "blur(10px)"
  noFill()
  strokeWeight(weight)
  stroke(255)
  translate(center.x, center.y)
  objTriangle(points)
  pop()
}

function drawPrism(x, y, size = 150) {
  const points = {
    a: createVector(0, 0),
    b: createVector(size, 0),
    c: createVector(size / 2, -(size * sqrt(3)) / 2),
  }

  const center = createVector(x - size / 2, y + size / 2)

  addPrismBlur(center, points)

  let weight = map(noise(offsets.triangleX), 0, 1, 1, 7)

  push()
  translate(center.x, center.y)
  noFill()
  strokeWeight(weight)
  stroke(255)
  objTriangle(points)

  pop()
}

function drawLightBeam(x, y) {
  const weight = map(noise(offsets.beamAngleX), 0, 1, 1, 5)
  push()
  translate(x, y)
  rotate(-30)

  strokeWeight(weight)
  stroke(255)
  line(0, 0, 190, 0)
  pop()
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(0);
  drawPrism(width / 2, height / 4)
  drawLightBeam(0, height / 2)


  for (const [key, value] of Object.entries(offsets)) {
    offsets[key] = value + 0.01
  }
}
