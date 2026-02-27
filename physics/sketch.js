let b

class Body {
  constructor(x, y, w, h){
    this.pos = createVector(x, y)
    this.dim = {
      width: w,
      height: h
    }
  }

  render() {
    rect(this.pos.x, this.pos.y, this.dim.width, this.dim.height)
  }
}

function setup() {
  createCanvas(400, 400);
  b = new Body(100, 100, 50, 50)
}

function draw() {
  background(220);
  b.render()
}
