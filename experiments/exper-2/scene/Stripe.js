class Stripe {
    constructor(x, y, w, h, col){
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.col = col
    }

    render() {
        fill(this.col)
        rect(this.x, this.y, this.w, this.h)
    }

    move() {
        this.x -= XVEL

        if (this.x < -this.w){
            this.x = width + this.w /2 - 10
        }
    }
}