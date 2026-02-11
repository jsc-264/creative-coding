const DIM = 13
let w

function setup() {
  createCanvas(400, 400);
  w = width / DIM

}

function draw() {
  background(50);

  for (let i = 0; i < DIM; i++) {
    for(let j = 0; j < DIM; j++) {
      const x = i * w
      const y = j * w
      rect(x, y, w)
    }
  }
}
