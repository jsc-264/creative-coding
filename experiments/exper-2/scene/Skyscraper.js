class Skyscraper {
    constructor(x, y, w, h, col) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.col = col

        this.winW = random(this.w / 2, this.w / 5)
        this.winH = random(this.h / 10, this.h / 30)
        this.winCol = color(random(190, 220), random(20, 30), random(70, 100))
    }

    render() {
        fill(220, 9, 39)
        rect(this.x, this.y, this.w, this.h)

        const winGridW = floor(this.w / this.winW)
        const winGridH = floor(this.h / this.winH)

        push()
        translate(this.x + 1, this.y + 1)
        for (let j = 0; j < winGridH; j++) {
            for (let i = 0; i < winGridW; i++) {
                fill(this.winCol)
                rect(this.w / winGridW * i, this.h / winGridH * j, this.w / winGridW - 2, this.h / winGridH - 2)
            }
        }
        pop()
    }

    update() {
        this.x -= XVEL / 5

        if (this.x < -this.w) {
            this.x = random(width, 2*width)
            this.w = random(50, 100)
            this.h = random(height/2, height)
            this.y = height - this.h

            this.winH = random(this.h / 10, this.h / 30)
            this.winW = random(this.w / 2, this.w / 5)
        }
    }
}