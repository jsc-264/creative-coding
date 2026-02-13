class Grid {
    constructor(size) {
        this.size = size
        this.grid = new Array(size)
        for (let i = 0; i < size; i++) {
            this.grid[i] = new Array(size)
        }
    }

    fill() {
        for (let j = 0; j < this.size; j++) {
            for (let i = 0; i < this.size; i++) {
                this.grid[i][j] = new Tile(i, j)
            }
        }
    }

    display() {
        const tileSize = width / this.size

        for (let j = 0; j < this.size; j++) {
            for (let i = 0; i < this.size; i++) {
                const CURRENT_TILE = this.grid[i][j]

                const TILE_DRAW_X = CURRENT_TILE.index.x * tileSize
                const TILE_DRAW_Y = CURRENT_TILE.index.y * tileSize

                if (CURRENT_TILE.state == ALIVE) {
                    fill(255)
                    stroke(0)
                } else {
                    fill(0)
                    stroke(255)
                }

                rect(TILE_DRAW_X, TILE_DRAW_Y, tileSize)

                textSize(16)
                const a = this.countAliveNeighbours(CURRENT_TILE)
                text(a, TILE_DRAW_X + tileSize / 2, TILE_DRAW_Y + tileSize / 2)
            }
        }
    }

    countAliveNeighbours(currentTile) {
        const indexX = currentTile.index.x
        const indexY = currentTile.index.y
        

        return currentTile.state

    }
}