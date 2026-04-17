let flockSize = 100
let flock = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)

  for (let i = 0; i< flockSize; i++){
    flock.push(new Bird(random(width), random(height), random(10, 30)))
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
  constructor(x, y, diam) {
    this.pos = createVector(x, y)
    this.vel = p5.Vector.random2D()
    this.diam = diam
  }

  render() {
    push()
    translate(this.pos.x, this.pos.y)
    circle(0, 0, this.diam)

    const mag = this.diam/2
    line(0, 0, this.vel.x*mag, this.vel.y*mag)
    pop()
  }

  update() {
    this.pos.add(this.vel)

    if (this.pos.x < -this.diam) this.pos.x = width + this.diam
    if (this.pos.x > width + this.diam) this.pos.x = -this.diam
    if (this.pos.y < -this.diam) this.pos.y = height + this.diam
    if (this.pos.y > height + this.diam) this.pos.y = -this.diam
  }

  flock(flock) {
    for (let bird of flock) {
      if (bird == this) {
        continue
      }

      let d = dist(bird.pos.x, bird.pos.y, this.pos.x, this.pos.y)
      if (d < (this.diam/2 + bird.diam/2) + 10) {

        const thisNormVec = p5.Vector.normalize(this.vel)
        const birdNormVec = p5.Vector.normalize(bird.vel)

        const avgVec = thisNormVec.add(birdNormVec).normalize()

        this.vel = avgVec
        bird.vel = avgVec
      }
    }
  }
}