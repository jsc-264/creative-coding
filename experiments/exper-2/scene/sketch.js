const XVEL = 10
let road
let scrapers = []

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  road = new Road(3 * height / 4)

  for (let i = 0; i < 10; i++){
    const scraperH = random(height/2, height)
    scrapers.push(new Skyscraper(
      -40 + width / 5 * i,
      height - scraperH,
      random(50, 100),
      scraperH
    ))
  }

  noStroke()
}

function draw() {
  background(196, 29, 85);

  scrapers.forEach(s => {
    s.update()
    s.render()
  })
  road.update()
  road.render()

  // noLoop()
}
