class Tile {
    constructor(x, y, state) {
        this.index = createVector(x, y)

        if (state != undefined) {
            this.state = state
        } else {
            this.state = random([DEAD, ALIVE])
        }
    }
}