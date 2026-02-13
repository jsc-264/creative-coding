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
        const CURRENT_TILE_INDEX_X = currentTile.index.x
        const CURRENT_TILE_INDEX_Y = currentTile.index.y


        let aliveNeighbours = 0
        for (let j = -1; j <= 1; j++) {
            for(let i = -1; i <= 1; i++) {
                if (CURRENT_TILE_INDEX_X+i < 0 || CURRENT_TILE_INDEX_X+i >= this.size){
                    continue
                }

                if (CURRENT_TILE_INDEX_Y + j < 0 || CURRENT_TILE_INDEX_Y + j >= this.size) {
                    continue
                }

                if (i == 0 && j == 0){
                    continue
                }

                if (this.grid[CURRENT_TILE_INDEX_X+i][CURRENT_TILE_INDEX_Y+j].state == ALIVE){
                    aliveNeighbours++
                }
            }
        }

        return aliveNeighbours
    }
}