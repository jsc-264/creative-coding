let flockSize = 200
let flock = []

let cohesionSlider
let alignmentSlider
let separationSlider

let cohesionP, alignmentP, separationP

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)

  for (let i = 0; i < flockSize; i++) {
    flock.push(new Bird(random(width), random(height), 10))
  }

  cohesionP = createP("Cohesion")
  cohesionP.position(0, 0)

  cohesionSlider = createSlider(1, 200, 100)
  cohesionSlider.position(0, 0)

  alignmentP = createP("Alignment")
  alignmentP.position(200, 0)

  alignmentSlider = createSlider(1, 200, 100)
  alignmentSlider.position(200, 0)

  separationP = createP("Separation")
  separationP.position(400, 0)

  separationSlider = createSlider(1, 40, 20)
  separationSlider.position(400, 0)
}

function draw() {
  background(135, 206, 235);

  cohesionP.html(`Cohesion ${cohesionSlider.value()}`)
  alignmentP.html(`Alignment ${alignmentSlider.value()}`)
  separationP.html(`Separation ${separationSlider.value()}`)

  flock.forEach(bird => {
    bird.setRules({
      cohesion: cohesionSlider.value(),
      separation: separationSlider.value(),
      alignment: alignmentSlider.value()
    }
    )
    bird.render()
    bird.flock(flock)
    bird.update()
  })
}