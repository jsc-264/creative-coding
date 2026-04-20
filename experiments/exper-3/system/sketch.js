let flockSize = 100
let flock = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)

  for (let i = 0; i< flockSize; i++){
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

class Bird {
  constructor(x, y, size) {
    this.pos = createVector(x, y)
    this.vel = createVector(random(-1, 1), random(-1, 1))
    this.size = size
  }

  render() {
    push()
    translate(this.pos.x, this.pos.y)
    rotate(this.vel.heading())

    triangle(
      this.size, 0,
      -this.size, -this.size/2,
      -this.size, this.size / 2,
    )

    pop()
  }

  update() {
    this.pos.add(this.vel)

    if (this.pos.x < -this.size) this.pos.x = width + this.size
    if (this.pos.x > width + this.size) this.pos.x = -this.size
    if (this.pos.y < -this.size) this.pos.y = height + this.size
    if (this.pos.y > height + this.size) this.pos.y = -this.size
  }

  flock(flock) {
    for (let bird of flock) {
      if (bird == this) {
        continue
      }

      let d = dist(bird.pos.x, bird.pos.y, this.pos.x, this.pos.y)
      if (d < (this.size/2 + bird.size/2) + 10) {

        const thisNormVec = p5.Vector.normalize(this.vel)
        const birdNormVec = p5.Vector.normalize(bird.vel)

        const avgVec = thisNormVec.add(birdNormVec).normalize()

        this.vel = avgVec
        bird.vel = avgVec
      }
    }
  }
}