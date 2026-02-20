const DIM = 20
let scl
let inc = 0.1

let field = []

let noiseX, noiseY
let noiseZ = 0

let ball

function setup() {
  createCanvas(400, 400);
  scl = width / DIM
  noStroke()

  ball = new Ball(0, 0)

  for (let j = 0; j < DIM; j++) {
    for (let i = 0; i < DIM; i++) {
      field[i] = new Array(j)
    }
  }
}

function draw() {
  background(200)
  noiseY = 0

  for (let j = 0; j < DIM; j++) {
    noiseX = 0
    for (let i = 0; i < DIM; i++) {
      const x = i * scl
      const y = j * scl

      const shade = noise(noiseX, noiseY, noiseZ) * 255
      const angle = noise(noiseX, noiseY, noiseZ) * TWO_PI

      const vect = p5.Vector.fromAngle(angle)

      fill(shade)
      rect(x, y, scl)

      push()
      stroke(0)
      translate(x, y)
      rotate(vect.heading())
      line(0, 0, scl, 0)
      pop()

      ball.update()
      ball.render()

      noiseX += inc
    }

    noiseY += inc
    noiseZ += inc/1000
  }

}
