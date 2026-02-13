const DIMENSION = 10
let tileStates
let tileSize

function setup() {
  createCanvas(400, 400);
  tileSize = width / DIMENSION

  // initialise grid
  tileStates = new Array(DIMENSION)
  for (let i = 0; i < DIMENSION; i++){
    tileStates[i] = new Array(DIMENSION)
  }

  print(tileStates)
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
