let flockSize = 100
let flock = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)

  for (let i = 0; i < flockSize; i++) {
    flock.push(new Bird(random(width), random(height), floor(random(5, 15))))
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
    this.vel = createVector(random(-1, 1), random(-1, 1))
    this.size = size

    this.speed = random(1, 2)
    this.maxSpeed = map(this.size, 5, 15, 6, 1)

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
    // flocking has 3 main concepts within it
    // 1) separation: close togther birds will steer away from each other if they are too close
    // 2) alignment: close together birds will take on a similar direction and velocity (already implemented ish)
    // 3) cohesion: close togther birds will attempt to travel to an average position of all of them

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
      const closeEnough = d < 20
      numClose += closeEnough ? 1 : 0


      const angleDifference = this.vel.angleBetween(bird.vel)
      const similarDirection = angleDifference < angleMax && angleDifference > -angleMax

      if (closeEnough && similarDirection) {
        this.vel = averageAngle(this, bird)
      }
    }

    this.speed = map(numClose, 0, 5, this.maxSpeed, 1)
  }
}