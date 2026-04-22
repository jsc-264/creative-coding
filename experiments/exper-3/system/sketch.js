let flockSize = 200
let flock = []

let cohesionSlider
let alignmentSlider
let separationSlider

function setup() {
  createCanvas(windowWidth*0.9, windowHeight*0.9);
  angleMode(DEGREES)

  for (let i = 0; i < flockSize; i++) {
    flock.push(new Bird(random(width), random(height), 10))
  }

  const cohesionP = createP("Cohesion")
  cohesionP.position(0, 0)

  cohesionSlider = createSlider(10, 200, 20)
  cohesionSlider.position(0, 0)

  const alignmentP = createP("Alignment")
  alignmentP.position(200, 0)

  alignmentSlider = createSlider(10, 200, 100)
  alignmentSlider.position(200, 0)

  const separationP = createP("Separation")
  separationP.position(400, 0)

  separationSlider = createSlider(10, 200, 100)
  separationSlider.position(400, 0)
}

function draw() {
  background(135, 206, 235);
  flock.forEach(bird => {
    bird.flock(flock)
    bird.update()
    bird.render()
  })
}