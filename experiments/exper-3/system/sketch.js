let flockSize = 10
let flock = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < flockSize; i++) {
    flock.push(new Bird(random(width), random(height)))
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
  constructor(x, y) {
    this.pos = createVector(x, y)
    this.vel = p5.Vector.random2D()
    this.diam = 20
  }

  render() {
    circle(this.pos.x, this.pos.y, this.diam)
    line(this.pos.x, this.pos.y, this.pos.x + this.vel.x * this.diam, this.pos.y + this.vel.y * this.diam)
  }

  update() {
    this.pos.add(this.vel)
  }

  flock(flock) {
    for (let bird of flock) {
      if (bird == this) {
        continue
      }

      let d = dist(bird.pos.x, bird.pos.y, this.pos.x, this.pos.y)
      if (d < 200) {
        line(bird.pos.x, bird.pos.y, this.pos.x, this.pos.y)
      }
    }
  }
}