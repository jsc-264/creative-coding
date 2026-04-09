class Road {
    constructor(y) {
        this.x = 0
        this.y = y
        this.w = width
        this.h = height - y

        this.concreteColour = color(50)
        this.paintColour = color(224, 172, 29)

        const stripeWidth = this.w / 3
        const stripeSpace = 10
        this.stripes = []
        for (let i = 0; i < 3; i++) {
            this.stripes.push(new Stripe(
                (stripeWidth + stripeSpace) * i,
                this.y + stripeSpace,
                stripeWidth,
                stripeSpace,
                this.paintColour))
        }
    }

    render() {
        fill(this.concreteColour)
        rect(this.x, this.y, this.w, this.h)

        this.stripes.forEach(s => {
            s.render()
        });
    }
}