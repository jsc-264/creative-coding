const DIM = 20
let scl

let xoff, yoff

function setup() {
  createCanvas(400, 400);
  scl = width / DIM
  noStroke()
}

function draw() {
  yoff = 0

  for (let j = 0; j < DIM; j++) {
    xoff = 1
    for (let i = 0; i < DIM; i++) {
      const x = i * scl
      const y = j * scl

      const shade = noise(xoff, yoff) * 255

      fill(shade)
      rect(x, y, scl)

      xoff += 0.1
    }

    yoff += 0.1
  }

  noLoop()
}
