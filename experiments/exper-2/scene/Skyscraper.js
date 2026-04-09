class Skyscraper {
    constructor(x, y, w, h, col) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.col = col
    }

    render() {
        fill(99, 97, 90)
        rect(this.x, this.y, this.w, this.h)

        const winGridW = map(this.w, width / 3, width / 8, 8, 3)
        const winGridH = map(this.h, 2 * height / 3, height, 10, 20)

        push()
        translate(this.x + 1, this.y + 1)
        for (let j = 0; j < winGridH; j++) {
            for (let i = 0; i < winGridW; i++) {
                fill(197, 213, 219)
                rect(this.w / winGridW * i, this.h / winGridH * j, this.w / winGridW - 2, this.h / winGridH - 2)
            }
        }
        pop()
    }

    update() {
        this.x -= XVEL / 5

        if (this.x < -this.w) {
            this.x = width
        }
    }
}