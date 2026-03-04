const DIM = 20
let w
let img


function preload() {
  img = loadImage("parrot.jpeg")
}

function setup() {
  createCanvas(400, 400)
  w = width / DIM
}

function draw() {
  background(220)

  image(img, 0, 0)

  img.loadPixels()

  for (let j = 0; j < DIM; j++) {
    for (let i = 0; i < DIM; i++) {
      const x = i * w
      const y = j * w

      const index = (x + y * width) * 4

      const red = img.pixels[index]
      const green = img.pixels[index + 1]
      const blue = img.pixels[index + 2]

      fill(red, green, blue)
      rect(x, y, w)
    }
  }
}
