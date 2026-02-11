const DIM = 100
let tileSize
const rad = 100

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
      let brg = map(j, 0, DIM, 10, 90)
      const d = dist(mouseX, mouseY, x, y)

      if (d < rad){
        // hue = (hue + 180) % 360
        brg = map(d, 0, rad, 100, brg)
      }

      // if (d < rad){
      //   const rel = d / rad
      //   hue = map(rel, 1, 0, 360, hue)
      // }

      fill(hue, 100, brg)

      noStroke()
      rect(x, y, tileSize)
    }
  }
}
