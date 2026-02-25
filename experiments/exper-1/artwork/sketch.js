let offsets = {
  prismWeight: 0,
  prismBlur: 0,
  beamWeight: 0,
  beamBlur: 0,
  rainbowWeight: 0,
  rainbowBright: 0,
  rainbowBlurWeight: 0
}

function objTriangle(points) {
  triangle(
    points.a.x, points.a.y,
    points.b.x, points.b.y,
    points.c.x, points.c.y,
  )
}

function gradientLine(x, len, color1, color2) {
  for (let i = x; i < x + len; i++) {
    const amt = map(i, x, x + len, 0, 1)
    const col = lerpColor(color1, color2, amt)
    stroke(col)
    point(i, 0)
  }
}

function addPrismBlur(center, points) {
  let weight = map(noise(offsets.prismBlur), 0, 1, 3, 10)

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

  let weight = map(noise(offsets.prismWeight), 0, 1, 1, 4)

  push()
  translate(center.x, center.y)
  noFill()
  strokeWeight(weight)
  stroke(255)
  fill(0)
  objTriangle(points)

  pop()
}

function addLightBlur(x, y, len) {
  const colourStart = color(255)
  const colourEnd = color(255, 0)
  const weight = map(noise(offsets.beamBlur), 0, 1, 1, 3)

  push()
  drawingContext.filter = "blur(10px)"
  translate(x, y)
  rotate(-30)
  strokeWeight(weight)
  gradientLine(x, len, colourStart, colourEnd)
  pop()
}

function drawLightBeam(x, y, len = 190, colourStart = color(255), colourEnd = color(255, 0)) {
  const weight = map(noise(offsets.beamWeight), 0, 1, 1, 3)

  addLightBlur(x, y, len)

  push()
  translate(x, y)
  rotate(-30)
  strokeWeight(weight)
  gradientLine(x, len, colourStart, colourEnd)
  pop()
}

function addRainbowBlur() {
  const weight = map(noise(offsets.rainbowBlurWeight), 0, 1, 5, 7)

  push()
  drawingContext.filter = "blur(10px)"
  colorMode(HSL)
  strokeWeight(weight)
  for (let i = 0; i < 7; i++) {
    const col = map(i, 0, 7, 0, 360)
    stroke(col, 100, 50)
    line(width / 2 + width / 20, height / 2 - height / 4 + i * (weight - 2), width, height / 3 + i * weight)
  }
  pop()
}

function drawRainbow() {
  const weight = map(noise(offsets.rainbowWeight), 0, 1, 6, 7)
  const bright = map(noise(offsets.rainbowBright), 0, 1, 40, 60)

  addRainbowBlur()

  push()
  colorMode(HSL)
  strokeWeight(weight)
  for (let i = 0; i < 7; i++) {
    const col = map(i, 0, 7, 0, 360)
    stroke(col, 100, bright)
    line(width / 2 + width / 20, height / 2 - height / 4 + i * (weight - 2), width, height / 3 + i * weight)
  }
  pop()
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)

  for (const [key, _] of Object.entries(offsets)) {
    offsets[key] = random(0, 1)
  }
}

function draw() {
  background(0);
  drawRainbow()
  drawPrism(width / 2, height / 4)
  drawLightBeam(0, height / 2)

  console.table(offsets)


  for (const [key, value] of Object.entries(offsets)) {
    offsets[key] = value + random(0.01, 0.03)
  }
}
