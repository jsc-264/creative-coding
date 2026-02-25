let pos
let vel
let acc

const maxV = 5

function setup() {
  createCanvas(400, 400);
  colorMode(HSL)

  pos = createVector(width/2, height/2)
  vel = createVector(0, 0)
  acc = createVector(0, 0)
}

function draw() {
  background(0, 0, 80);

  vel.mult(0)

  vel.add(acc)

  vel.x = constrain(vel.x, -maxV, maxV)
  vel.y = constrain(vel.y, -maxV, maxV)

  pos.add(vel)

  if (keyIsDown(LEFT_ARROW)) {
    acc.x -= 0.1
  } else {
    acc.x *= 0.99
  }

  if (keyIsDown(RIGHT_ARROW)) {
    acc.x += 0.1
  } else {
    acc.x *= 0.99
  }

  if (keyIsDown(UP_ARROW)) {
    acc.y -= 0.1
  } else {
    acc.y *= 0.99
  }

  if (keyIsDown(DOWN_ARROW)) {
    acc.y += 0.1
  } else {
    acc.y *= 0.99
  }

  if (vel.x < 0.1 && vel.x > -0.1) {
    vel.x = 0
  }

  if (vel.y < 0.1 && vel.y > -0.1) {
    vel.y = 0
  }

  pos.x = constrain(pos.x, 0, width)
  pos.y = constrain(pos.y, 0, height)


  const hue = map(vel.mag(), 0, maxV, 180, 0)
  fill(hue, 75, 50)
  circle(pos.x, pos.y, 25)
}
