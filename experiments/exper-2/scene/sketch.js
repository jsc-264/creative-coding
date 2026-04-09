const XVEL = 10
let road

function setup() {
  createCanvas(400, 400);
  road = new Road(3 * height / 4)
  noStroke()
}

function draw() {
  background(125, 193, 219);
  road.update()
  road.render()
}
