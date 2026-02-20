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

  textSize(7)
  textAlign(CENTER, CENTER)
  

  ball = new Ball(random(width), random(height))

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
      let n = noise(noiseX, noiseY, noiseZ)
      let angle = map(n, 0, 1, -TWO_PI, TWO_PI)
      // angle = map(mouseX, 0, width, 0, TWO_PI)
      // // angle = constrain(angle, PI / 2, 3*PI / 2)

      const vect = p5.Vector.fromAngle(angle)

      // fill(shade)
      // rect(x, y, scl)
      
      // push()
      // stroke(0)
      // fill(0)
      // text(`${i},${j}`, x+scl/2, y+scl/2)
      // pop()

      push()
      stroke(0, 50)
      translate(x, y)
      rotate(vect.heading())
      line(0, 0, scl, 0)
      pop()

      field[i][j] = vect

      noiseX += inc
    }

    noiseY += inc
    noiseZ += inc/1000
  }

  ball.follow(field)
  ball.update()
  ball.render()
}
