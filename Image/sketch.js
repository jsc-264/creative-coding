const DIM = 100
let w
let img

function preload() {
  img = loadImage("parrot.jpeg")
}

function setup() {
  createCanvas(400, 400)
  w = floor(width / DIM)
}

function draw() {
  background(50)

  // image(img, 0, 0)

  img.loadPixels()

  for (let j = 0; j < DIM; j++) {
    for (let i = 0; i < DIM; i++) {
      const x = i * w
      const y = j * w


      const index = (x + y * width) * 4

      const red = img.pixels[index]
      const green = img.pixels[index + 1]
      const blue = img.pixels[index + 2]

      const bright = (red+green+blue) / 3
      const diam = map(bright, 0, 255, 0, w)

      noStroke()
      circle(x+w/2, y+w/2, diam)

      // fill(bright)
      // noStroke()
      // rect(x, y, w)
    }
  }
}
