let flockSize = 100
let flock = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)

  for (let i = 0; i < flockSize; i++) {
    flock.push(new Bird(random(width), random(height), random(5, 15)))
  }

}

function draw() {
  background(135, 206, 235);
  flock.forEach(bird => {
    bird.flock(flock)
    bird.update()
    bird.render()
  })
}

function averageAngle(bird1, bird2) {
  const thisNormVec = p5.Vector.normalize(bird1.vel)
  const birdNormVec = p5.Vector.normalize(bird2.vel)

  const avgVec = thisNormVec.add(birdNormVec).normalize()

  return avgVec
}

class Bird {
  constructor(x, y, size) {
    this.pos = createVector(x, y)
    this.speed = random(1, 2)
    this.vel = createVector(random(-1, 1), random(-1, 1))
    this.size = size

    this.col = color(random(20, 100), random(20, 100), random(10, 15))
  }

  render() {
    push()
    translate(this.pos.x, this.pos.y)
    rotate(this.vel.heading())

    noStroke()
    fill(this.col)
    triangle(
      this.size, 0,
      -this.size, -this.size / 2,
      -this.size, this.size / 2,
    )

    pop()
  }

  update() {
    this.vel.setMag(this.speed)
    this.pos.add(this.vel)

    if (this.pos.x < -this.size) this.pos.x = width + this.size
    if (this.pos.x > width + this.size) this.pos.x = -this.size
    if (this.pos.y < -this.size) this.pos.y = height + this.size
    if (this.pos.y > height + this.size) this.pos.y = -this.size
  }

  flock(flock) {
    // max angle that two birds can be meeting at and they still change direction
    // 180 = two birds will always turn if near each other
    // 0 = two birds will never turn if near each other
    const angleMax = 145

    let numClose = 0

    for (let bird of flock) {
      if (bird == this) {
        continue
      }

      let d = dist(bird.pos.x, bird.pos.y, this.pos.x, this.pos.y)
      const closeEnough = d < (this.size / 2 + bird.size / 2) + 10
      numClose += closeEnough ? 1 : 0


      const angleDifference = this.vel.angleBetween(bird.vel)
      const similarDirection = angleDifference < angleMax && angleDifference > -angleMax

      if (closeEnough && similarDirection) {
        this.vel = averageAngle(this, bird)
      }
    }

    this.speed = map(numClose, 0, 10, 2, 0.1)
  }
}