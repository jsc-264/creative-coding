class Ball {
    constructor(x, y){
        this.pos = createVector(x, y)
        this.vel = createVector(0, 0)
        this.acc = createVector(0, 0)
        this.d = 30
    }

    render() {
        push()
        stroke(0)
        fill(225)
        circle(this.pos.x, this.pos.y, this.d)
        pop()
    }

    update() {
        this.vel.add(this.acc)
        this.pos.add(this.vel)
    }

    applyForce(force){
        this.acc.add(force)
    }
}