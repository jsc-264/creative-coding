let x, y

let vx, vy

let ax, ay

const maxV = 5

function setup() {
  createCanvas(400, 400);

  x = width / 2
  y = height / 2

  ax = 0
  ay = 0
}

function draw() {
  background(220);

  vx = 0
  vy = 0

  vx += ax
  vy += ay

  vx = constrain(vx, -maxV, maxV)
  vy = constrain(vy, -maxV, maxV)

  x += vx
  y += vy

  if (keyIsDown(LEFT_ARROW)) {
    ax -= 0.1
  } else {
    ax *= 0.99
  }

  if (keyIsDown(RIGHT_ARROW)) {
    ax += 0.1
  } else {
    ax *= 0.99
  }

  if (keyIsDown(UP_ARROW)) {
    ay -= 0.1
  } else {
    ay *= 0.99
  }

  if (keyIsDown(DOWN_ARROW)) {
    ay += 0.1
  } else {
    ay *= 0.99
  }

  if (ax < 0.001 && ax > -0.001) {
    ax = 0
  }

  if (ay < 0.001 && ay > -0.001) {
    ay = 0
  }

  x = constrain(x, 0, width)
  y = constrain(y, 0, height)

  circle(x, y, 25)
}
