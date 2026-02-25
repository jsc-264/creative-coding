let x, y

let vx, vy

const speed = 5

function setup() {
  createCanvas(400, 400);

  x = width / 2
  y = height / 2
}

function draw() {
  background(220);

  vx = 0
  vy = 0

  if (keyIsDown(LEFT_ARROW)) vx -= speed
  if (keyIsDown(RIGHT_ARROW)) vx += speed
  if (keyIsDown(UP_ARROW)) vy -= speed
  if (keyIsDown(DOWN_ARROW)) vy += speed

  x += vx
  y += vy
  circle(x, y, 50)
}
