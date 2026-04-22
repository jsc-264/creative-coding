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
    const neighbourDistance = 20

    const avgPos = createVector(0, 0)
    let neighbours = 0
    let separated = false

    if (!separated) {
      for (let bird of flock) {
        const d = dist(this.pos.x, this.pos.y, bird.pos.x, bird.pos.y)
        const birdCloseEnough = d < neighbourDistance

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
      separated = true
    }
  }

  align(flock) {

  }

  cohere(flock) {

  }

  flock(flock) {
    // flocking has 3 main concepts within it
    // 1) separation: close togther birds will steer away from each other if they are too close
    // 2) alignment: close together birds will take on a similar direction and velocity (already implemented ish)
    // 3) cohesion: close togther birds will attempt to travel to an average position of all of them

    this.separate(flock)
    // this.align(flock)
    // this.cohere(flock)
  }
}