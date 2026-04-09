const XVEL = 5
let road

function setup() {
  createCanvas(400, 400);
  road = new Road(3 * height / 4)
  noStroke()
}

function draw() {
  background(220);
  road.render()
}
