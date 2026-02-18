class Generation {
    constructor(size) {
        this.size = size
        this.grid = new Array(size)
        for (let i = 0; i < size; i++) {
            this.grid[i] = new Array(size)
        }
    }

    fill(state) {
        // fills generation grid with tiles,
        // if state is stated, all tiles have that state.
        // Otherwise, state is random.
        for (let j = 0; j < this.size; j++) {
            for (let i = 0; i < this.size; i++) {
                if (state != undefined) {
                    this.grid[i][j] = new Tile(i, j, state)
                } else {
                    this.grid[i][j] = new Tile(i, j)
                }
            }
        }
    }

    display() {
        // displays generation as a NxN grid on canvas
        const tileSize = width / this.size

        for (let j = 0; j < this.size; j++) {
            for (let i = 0; i < this.size; i++) {
                const CURRENT_TILE = this.grid[i][j]


                // gets location to draw each tile
                const TILE_DRAW_X = CURRENT_TILE.index.x * tileSize
                const TILE_DRAW_Y = CURRENT_TILE.index.y * tileSize

                const CURRENT_TILE_ALIVE = CURRENT_TILE.state == ALIVE

                // only fill with white if cell is alive
                if (CURRENT_TILE_ALIVE) {
                    fill(255)
                } else {
                    fill(0)
                }

                noStroke()
                rect(TILE_DRAW_X, TILE_DRAW_Y, tileSize)
            }
        }
    }

    countAliveNeighbours(currentTile) {
        // counts number of neighbours that have alive state
        const CURRENT_TILE_INDEX_X = currentTile.index.x
        const CURRENT_TILE_INDEX_Y = currentTile.index.y


        let aliveNeighbours = 0
        for (let j = -1; j <= 1; j++) {
            for (let i = -1; i <= 1; i++) {
                let neighbour_tile_index_x = CURRENT_TILE_INDEX_X + i
                let neighbour_tile_index_y = CURRENT_TILE_INDEX_Y + j

                // // ignore neighbours put of bounds
                // if (neighbour_tile_index_x < 0 || neighbour_tile_index_x >= this.size) {
                //     continue
                // }

                // if (neighbour_tile_index_y < 0 || neighbour_tile_index_y >= this.size) {
                //     continue
                // }

                // neighbour wrapping
                if (neighbour_tile_index_x < 0) {
                    neighbour_tile_index_x = this.size - 1
                }

                if (neighbour_tile_index_x >= this.size) {
                    neighbour_tile_index_x = 0
                }

                if (neighbour_tile_index_y < 0) {
                    neighbour_tile_index_y = this.size - 1
                }

                if (neighbour_tile_index_y >= this.size) {
                    neighbour_tile_index_y = 0
                }

                // check if neighbour is same as current tile
                if (i == 0 && j == 0) {
                    continue
                }

                // is current neighbour alive?
                const CURRENT_NEIGHBOUR = this.grid[neighbour_tile_index_x][neighbour_tile_index_y]
                if (CURRENT_NEIGHBOUR.state == ALIVE) {
                    aliveNeighbours++
                }
            }
        }

        return aliveNeighbours
    }

    evolve() {
        // creates new generation based off rules and prev gen
        const newGen = new Generation(this.size)
        newGen.fill(NO_STATE)

        for (let j = 0; j < DIMENSION; j++) {
            for (let i = 0; i < DIMENSION; i++) {
                const CURRENT_TILE = this.grid[i][j]
                const ALIVE_NEIGHBOURS = this.countAliveNeighbours(CURRENT_TILE)

                const CURRENT_TILE_ALIVE = CURRENT_TILE.state == ALIVE
                const CURRENT_TILE_DEAD = CURRENT_TILE.state == DEAD

                // Rule 1. Any live cell with fewer than two live neighbors dies, as if caused by under population.
                if (CURRENT_TILE_ALIVE && ALIVE_NEIGHBOURS < 2) {
                    newGen.grid[i][j].state = DEAD;
                }
                // Rule 2. Any live cell with two or three live neighbors lives on to the next generation.
                if (CURRENT_TILE_ALIVE && (ALIVE_NEIGHBOURS == 2 || ALIVE_NEIGHBOURS == 3)) {
                    newGen.grid[i][j].state = ALIVE;
                }
                // Rule 3. Any live cell with more than three live neighbors dies, as if by overpopulation.
                if (CURRENT_TILE_ALIVE && ALIVE_NEIGHBOURS > 3) {
                    newGen.grid[i][j].state = DEAD;
                }
                // Rule 4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
                if (CURRENT_TILE_DEAD && ALIVE_NEIGHBOURS == 3) {
                    newGen.grid[i][j].state = ALIVE;
                }

            }
        }


        return newGen
    }
}