function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
}

function draw() {
  background(135, 206, 235);
}

class Bird {
  constructor(x, y, dir){
    this.pos = createVector(x, y)
    this.dir = dir

    this.vel = createVector(0, 0)
    this.acc = createVector(0, 0)

    this.size = 10
  }

  render() {
    push()
    translate(this.pos.x, this.pos.y)
    rotate(this.dir)

    triangle(
      -this.size, this.size,
      this.size, this.size,
      0, this.size
    )
    pop()
  }
}