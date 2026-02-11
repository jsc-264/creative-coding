const DIM = 50
let w
let inc

let xstart, ystart

let xoff, yoff

function setup() {
  createCanvas(400, 400);
  w = width / DIM

  xstart = random(5)
  ystart = random(5)
  inc = 0.01
}

function draw() {
  background(50);
  
  yoff = ystart
  for (let i = 0; i < DIM; i++) {
    
    xoff = xstart
    for(let j = 0; j < DIM; j++) {
      const x = i * w
      const y = j * w
      
      noStroke()
      fill(noise(xoff, yoff) * 255)
      rect(x, y, w)

      xoff += inc
    }

    yoff += inc
  }

  xstart += inc
  ystart += inc
  // noLoop()
}
