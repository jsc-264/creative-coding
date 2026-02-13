const DIMENSION = 10
let tileGrid
let tileSize

function setup() {
  createCanvas(400, 400);
  tileSize = width / DIMENSION

  // initialise tile grid
  tileGrid = new Array(DIMENSION)
  for (let i = 0; i < DIMENSION; i++){
    tileGrid[i] = new Array(DIMENSION)
  }

  // fill tile grid
  for (let i = 0; i < DIMENSION; i++) {
    for(let j = 0; j < DIMENSION; j++) {
      tileGrid[i][j] = 0
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
      rect(x, y, tileSize)
    }
  }
}
