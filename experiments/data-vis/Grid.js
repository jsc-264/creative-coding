class Grid {
    constructor(size) {
        this.size = size
        this.grid = new Array(size)
        for (let i = 0; i < size; i++) {
            this.grid[i] = new Array(size)
        }
    }

    fill() {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                this.grid[i][j] = new Tile(i, j)
            }
        }
    }

    display() {
        const tileSize = width / this.size

        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                const CURRENT_TILE = this.grid[i][j]

                const TILE_DRAW_X = CURRENT_TILE.index.x * tileSize
                const TILE_DRAW_Y = CURRENT_TILE.index.y * tileSize

                if (CURRENT_TILE.state == ALIVE){
                    fill(0)
                } else {
                    fill(255)
                }

                rect(TILE_DRAW_X, TILE_DRAW_Y, tileSize)
            }
        }
    }
}