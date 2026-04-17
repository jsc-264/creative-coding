let b

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  b = new Bird(width / 2, height - 100, 0)
}

function draw() {
  background(135, 206, 235);
  b.update()
  b.render()
  b.seek()
}

// from https://editor.p5js.org/codingtrain/sketches/AxuChwlgb
class Bird {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxSpeed = 4;
    this.maxForce = 0.25;
    this.r = 16;
    this.target = createVector(random(width), random(height));
  }

  seek() {
    let force = p5.Vector.sub(this.target, this.pos);
    force.setMag(this.maxSpeed);
    force.sub(this.vel);
    force.limit(this.maxForce);
    this.shove(force);
  }

  shove(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.set(0, 0);

    if (dist(this.pos.x, this.pos.y, this.target.x, this.target.y) < 200) {
      this.target = createVector(random(width), random(height));
    }
  }

  render() {
    stroke(255);
    strokeWeight(2);
    fill(255);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
    pop();

    circle(this.target.x, this.target.y, 10)
  }

  edges() {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }
}