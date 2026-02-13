class Tile {
    constructor(x, y){
        this.index = createVector(x, y)
        this.state = random([DEAD, ALIVE])
    }
}