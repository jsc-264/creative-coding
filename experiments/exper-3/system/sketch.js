let flockSize = 2
let flock = []

function setup() {
  createCanvas(windowWidth, windowHeight);

  flock.push(new Bird(50, height/2, createVector(1, 0)))
  flock.push(new Bird(width/2, height-50, createVector(0, -1)))

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
  constructor(x, y, vel) {
    this.pos = createVector(x, y)
    this.vel = vel
    this.diam = 20
  }

  render() {
    circle(this.pos.x, this.pos.y, this.diam)
    line(this.pos.x, this.pos.y, this.pos.x + this.vel.x * this.diam, this.pos.y + this.vel.y * this.diam)
  }

  update() {
    this.pos.add(this.vel)

    if (this.pos.x < -this.diam) this.pos.x = width + this.diam
    if (this.pos.x > width + this.diam) this.pos.x = this.diam
    if (this.pos.y < -this.diam) this.pos.y = height + this.diam
    if (this.pos.y > height + this.diam) this.pos.y = this.diam
  }

  flock(flock) {
    for (let bird of flock) {
      if (bird == this) {
        continue
      }

      let d = dist(bird.pos.x, bird.pos.y, this.pos.x, this.pos.y)
      if (d < 50) {
        // line(bird.pos.x, bird.pos.y, this.pos.x, this.pos.y)

        const thisNormVec = p5.Vector.normalize(this.vel)
        const birdNormVec = p5.Vector.normalize(bird.vel)

        const avgVec = thisNormVec.add(birdNormVec).normalize()

        this.vel = avgVec
        bird.vel = avgVec
      }
    }
  }
}