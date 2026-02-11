const DIM = 100
let tileSize


function setup() {
  createCanvas(600, 600);
  colorMode(HSL)

  tileSize = width / DIM
}

function draw() {
  background(220);

  for (let i = 0; i < DIM; i++) {
    for (let j = 0; j < DIM; j++) {
      let x = tileSize * i
      let y = tileSize * j

      let hue = map(i, 0, DIM, 0, 360)
      let brg = map(j, 0, DIM, 0, 100)

      fill(hue, 100, brg)

      noStroke()
      rect(x, y, tileSize)
    }
  }
}
