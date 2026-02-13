const DIMENSION = 10
let currentGen
let tileSize

const NO_STATE = -1
const DEAD = 0
const ALIVE = 1

function setup() {
  createCanvas(400, 400);
  frameRate(10)
  tileSize = width / DIMENSION

  // initialise tile grid
  currentGen = new Generation(DIMENSION)
  currentGen.fill()
}

function draw() {
  background(220);

  currentGen.display()

  const nextGen = currentGen.evolve()
  currentGen = nextGen
}
