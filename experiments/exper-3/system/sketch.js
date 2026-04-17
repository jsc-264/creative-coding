function setup() {
  createCanvas(windowWidth, windowHeight);
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
  }
}