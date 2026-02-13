class Tile {
    constructor(x, y, state) {
        this.index = createVector(x, y)
        if (state) {
            this.state = state
        } else {
            this.state = random([DEAD, ALIVE])
        }
    }
}