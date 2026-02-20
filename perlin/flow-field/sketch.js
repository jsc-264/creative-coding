const DIM = 20
let scl
let inc = 0.1

let xoff, yoff

function setup() {
  createCanvas(400, 400);
  scl = width / DIM
  noStroke()
}

function draw() {
  yoff = 0

  for (let j = 0; j < DIM; j++) {
    xoff = 0
    for (let i = 0; i < DIM; i++) {
      const x = i * scl
      const y = j * scl

      const shade = noise(xoff, yoff) * 255

      const vect = p5.Vector.fromAngle(random(TWO_PI))

      fill(shade)
      rect(x, y, scl)

      push()
      stroke(0)
      translate(x, y)
      rotate(vect.heading())
      line(0, 0, scl, 0)
      pop()

      xoff += inc
    }

    yoff += inc
  }

}
