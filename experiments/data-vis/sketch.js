const DIMENSION = 10
let currentGen
let tileSize

const DEAD = 0
const ALIVE = 1// fill tile grid

function setup() {
  createCanvas(400, 400);
  tileSize = width / DIMENSION

  // initialise tile grid
  currentGen = new Grid(DIMENSION)
  currentGen.fill()

  console.log(currentGen.grid)
}

function draw() {
  background(220);

  currentGen.display()
}
