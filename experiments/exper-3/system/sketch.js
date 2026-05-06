let flockSize = 200
let flock = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)

  for (let i = 0; i < flockSize; i++) {
    flock.push(new Bird(random(width), random(height), 10))
  }
}

function draw() {
  background(135, 206, 235);
  for (let i = flock.length - 1; i >= 0; i--){
    const bird = flock[i]

    bird.flock(flock)
    bird.update()
    bird.render()

    if (bird.lifespan <= 0){
      flock.splice(i, 1)
    }
  }
}

function mouseDragged(){
  flock.push(new Bird(mouseX, mouseY, 10))
}