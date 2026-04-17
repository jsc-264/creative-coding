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
    bird.render()
  })
}

class Bird {
  constructor(x, y){
    this.pos = createVector(x, y)
    this.diam = 20
  }

  render(){
    circle(this.pos.x, this.pos.y, this.diam)
  }
}