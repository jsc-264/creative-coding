class Ball {
    constructor(x, y) {
        this.pos = createVector(x, y)
        this.vel = createVector(0, 0)
        this.acc = createVector(0, 0)
        this.d = 30
    }

    render() {
        push()
        stroke(0)
        noFill()
        circle(this.pos.x, this.pos.y, this.d)
        pop()
    }

    update() {
        this.vel.normalize()
        this.acc.normalize()

        if (this.pos.x <         -this.d / 2) this.pos.x = width + this.d / 2
        if (this.pos.x >  width + this.d / 2) this.pos.x = -this.d / 2
        if (this.pos.y <         -this.d / 2) this.pos.y = height + this.d / 2
        if (this.pos.y > height + this.d / 2) this.pos.y = -this.d / 2

        this.vel.add(this.acc)
        this.pos.add(this.vel)
    }

    applyForce(force) {
        this.acc.add(force)
    }

    follow(field) {
        const x = constrain(floor(this.pos.x / DIM), 0, DIM - 1)
        const y = constrain(floor(this.pos.y / DIM), 0, DIM - 1)

        const force = field[x][y]

        this.applyForce(force)

    }
}