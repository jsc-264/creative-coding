class Road {
    constructor(y) {
        this.x = 0
        this.y = y
        this.w = width
        this.h = height - y

        this.concreteColour = color(50)
        this.paintColour = color(224, 172, 29)

        this.stripe = new Stripe(0, this.y + 10, this.w / 3, 10, this.paintColour)
    }

    render() {
        fill(this.concreteColour)
        rect(this.x, this.y, this.w, this.h)

        this.stripe.render()
    }

    update() {
        this.stripe.move()
    }
}