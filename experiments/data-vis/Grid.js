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
            for(let j = 0; j < this.size; j++) {
                const currentTile = this.grid[i][j]

                const x = currentTile.index.x * tileSize
                const y = currentTile.index.y * tileSize

                rect(x, y, tileSize)
            }
        }
    }
}