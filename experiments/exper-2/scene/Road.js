class Road {
    constructor(y) {
        this.x = 0
        this.y = y
        this.w = width
        this.h = height - y

        this.stripe = new Stripe(0, this.y + 10, this.w / 3, 10)
    }

    render() {
        fill(50)
        rect(this.x, this.y, this.w, this.h)

        this.stripe.render()
    }

    update() {
        this.stripe.update()
    }
}