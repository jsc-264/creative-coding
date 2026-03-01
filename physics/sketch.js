let g = 1

let b

class Body {
  constructor(x, y, w, h) {
    this.pos = createVector(x, y)
    this.dim = {
      w: w,
      h: h
    }

    this.vel = createVector(0, 0)
  }

  render() {
    noStroke()
    fill(200)
    rect(this.pos.x, this.pos.y, this.dim.w, this.dim.h)
  }

  update() {
    this.vel.add(0, g)
    this.pos.add(this.vel)

    this.pos.y = constrain(this.pos.y, 0, height - this.dim.h / 2)

  }
}

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
  b = new Body(100, 100, 50, 50)
}

function draw() {
  background(50);
  b.render()
  b.update()
}
