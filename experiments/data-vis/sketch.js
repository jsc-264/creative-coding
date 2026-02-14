const DIMENSION = 100
let currentGen
let tileSize

const NO_STATE = -1
const DEAD = 0
const ALIVE = 1

let hueSlider
let hueP

let satSlider
let satP

let brightSlider
let brightP

function setup() {
  createCanvas(400, 400);
  frameRate(10)
  colorMode(HSB)
  tileSize = width / DIMENSION

  hueP = createP("Hue")
  hueSlider = createSlider(0, 360)

  satP = createP("Saturation")
  satSlider = createSlider(0, 100)

  brightP = createP("Brightness")
  brightSlider = createSlider(0, 100)

  // initialise tile grid
  currentGen = new Generation(DIMENSION)
  currentGen.fill()
}

function draw() {
  const hue = hueSlider.value()
  const sat = satSlider.value()
  const bright = brightSlider.value()

  const col = color(hue, sat, bright)
  currentGen.display(col)

  const nextGen = currentGen.evolve()
  currentGen = nextGen
}
