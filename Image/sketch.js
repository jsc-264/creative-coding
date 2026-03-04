const DIM = 50
let w
let img

const chars = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+ ~<>i!lI;:,^`'.    "
let charsList

function preload() {
  img = loadImage("parrot.jpeg")
  charsList = chars.split("")
  print(charsList)
}

function setup() {
  createCanvas(400, 400)
  textAlign(CENTER, CENTER)
  w = floor(width / DIM)
}

function draw() {
  background(0)

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
      const charIndex = floor(map(bright, 0, 255, charsList.length-1, 0))


      noStroke()
      fill(255)
      textSize(w)
      text(charsList[charIndex], x+w/2, y+w/2)
    }
  }
}
