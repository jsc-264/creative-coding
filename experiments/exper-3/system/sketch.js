let b

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  b = new Bird(width/2, height-100, 0)
}

function draw() {
  background(135, 206, 235);
  b.render()
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
      0, -this.size*2
    )
    pop()
  }
}