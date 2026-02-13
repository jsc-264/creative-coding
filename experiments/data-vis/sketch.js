const DIMENSION = 10
let currentGen
let tileSize

const DEAD = 0
const ALIVE = 1// fill tile grid

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
}

function mouseClicked(){
  const nextGen = currentGen.evolve()
  currentGen = nextGen
}
