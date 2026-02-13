const DIMENSION = 10
let currentGen
let tileSize

const NO_TILE = -1
const DEAD = 0
const ALIVE = 1

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER)
  randomSeed(1)
  tileSize = width / DIMENSION

  // initialise tile grid
  currentGen = new Generation(DIMENSION)
  currentGen.fill()
}

function draw() {
  background(220);

  currentGen.display()
  console.log(currentGen.grid)
  noLoop()
}

function mouseClicked(){
  const nextGen = currentGen.evolve()
  currentGen = nextGen
  redraw()
}
