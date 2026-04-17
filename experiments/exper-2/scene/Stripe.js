class Stripe {
    constructor(x, y, w, h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

    render() {
        fill(45, 88, 88)
        rect(this.x, this.y, this.w, this.h)
    }

    update() {
        this.x -= XVEL

        if (this.x < -this.w){
            this.x = width + this.w /2 - 10
        }
    }
}