let flockSize = 200
let flock = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)

  for (let i = 0; i < flockSize; i++) {
    flock.push(new Bird(random(width), random(height), 10))
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

function averageVectors(vectors) {
  let sum = createVector()
  for (let v of vectors) {
    sum.add(p5.Vector.normalize(v))
  }
  return sum
}

class Bird {
  constructor(x, y, size) {
    this.pos = createVector(x, y)
    this.vel = createVector(random(-1, 1), random(-1, 1))
    this.size = size

    this.speed = random(3, 5)

    this.col = color(random(20, 100), random(20, 100), random(10, 15))

    this.separationDistance = 20
    this.cohesionDistance = 100
    this.alignmentDistance = 100
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

  separate(flock) {
    const avgPos = createVector(0, 0)
    let neighbours = 0

    for (let bird of flock) {
      const d = dist(this.pos.x, this.pos.y, bird.pos.x, bird.pos.y)
      const birdCloseEnough = d < this.separationDistance

      if (!birdCloseEnough) continue

      neighbours++
      avgPos.add(bird.pos)
    }

    if (neighbours > 0) {
      avgPos.div(neighbours)
    }

    const awayVector = p5.Vector.sub(this.pos, avgPos)
    const avgVector = averageVectors([awayVector, this.vel])

    this.vel = avgVector
  }

  align(flock) {
    let avgDir = 0
    let neighbours = 0

    for (let bird of flock) {
      const d = dist(this.pos.x, this.pos.y, bird.pos.x, bird.pos.y)
      const birdCloseEnough = d < this.alignmentDistance

      if (!birdCloseEnough) continue

      neighbours++
      avgDir += bird.vel.heading()
    }

    if (neighbours > 0) {
      avgDir /= neighbours
    }

    this.vel.setHeading(avgDir)
  }

  cohere(flock) {
    let avgPos = createVector(0, 0)
    let neighbours = 0

    for (let bird of flock) {
      const d = dist(this.pos.x, this.pos.y, bird.pos.x, bird.pos.y)
      const birdCloseEnough = d < this.cohesionDistance

      if (!birdCloseEnough) continue

      neighbours++
      avgPos.add(bird.pos)
    }

    if (neighbours > 0) {
      avgPos.div(neighbours)
    }

    const towardsVector = p5.Vector.sub(avgPos, this.pos)
    const avgVector = averageVectors([towardsVector, this.vel])

    this.vel = avgVector
  }

  flock(flock) {
    // flocking has 3 main concepts within it
    // 1) separation: close togther birds will steer away from each other if they are too close
    // 2) alignment: close together birds will take on a similar direction and velocity (already implemented ish)
    // 3) cohesion: close togther birds will attempt to travel to an average position of all of them

    this.cohere(flock)
    this.align(flock)
    this.separate(flock)
  }
}