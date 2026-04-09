const XVEL = 10
let road
let s

function setup() {
  createCanvas(400, 400);
  road = new Road(3 * height / 4)
  s = new Skyscraper(width*0.667, 20, width/4, height-20)
  noStroke()
}

function draw() {
  background(125, 193, 219);
  s.update()
  s.render()
  road.update()
  road.render()
}
