const DIMENSION = 20
let currentGrid
let tileSize

const DEAD = 0

function newGrid(size = DIMENSION){
  // returns new empty grid
  let grid = new Array(size)
  for (let i = 0; i < DIMENSION; i++) {
    grid[i] = new Array(size)
  }

  return grid
}

function setup() {
  createCanvas(400, 400);
  tileSize = width / DIMENSION

  // initialise tile grid
  currentGrid = newGrid()

  // fill tile grid
  for (let i = 0; i < DIMENSION; i++) {
    for(let j = 0; j < DIMENSION; j++) {
      currentGrid[i][j] = round(random(1))
    }
  }
}

function draw() {
  background(220);

  // draw grid
  for (let i = 0; i < DIMENSION; i++) {
    for(let j = 0; j < DIMENSION; j++) {
      const x = i * tileSize
      const y = j * tileSize

      const CURRENT_TILE = currentGrid[i][j]
      if (CURRENT_TILE == DEAD){
        fill(0)
      } else {
        fill(255)
      }

      rect(x, y, tileSize)
    }
  }
}
