function drawFace(x, y, d, cols) {
  const space = 5
  push()
  translate(x, y)
  noStroke()

  fill(cols.skin)
  circle(0, 0, d) // head

  fill(cols.eyes)

  circle(-d / space, -d / space, d / space) // left eye
  push()
  stroke(0)
  strokeWeight(d/50)
  point(-d / space, -d / space, d / space)
  pop()

  circle(d / space, -d / space, d / space) // right eye
  push()
  stroke(0)
  strokeWeight(d / 50)
  point(d / space, -d / space, d / space)
  pop()

  stroke(cols.lips)
  strokeWeight(d/(space * 10))
  noFill()
  arc(0, d / (space * 2), 2 * d / space, 2 * d / space, 0, -PI) // smile
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

  drawFace(500, 100, 75, {
    skin: color(87, 204, 91),
    eyes: color(185, 3, 100),
    lips: color(50, 5, 255)
  })
}
