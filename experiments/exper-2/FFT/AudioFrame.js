class AudioFrame {
    constructor(spectrum) {
        this.spectrum = spectrum
        this.bins = this.spectrum.length

        this.levels = {
            lows: this.spectrum.slice(0, this.bins / 3),
            mids: this.spectrum.slice(this.bins / 3, 2 * this.bins / 3),
            highs: this.spectrum.slice(this.bins - 5)
        }
    }

    showFullSpectrum(x, y, w, h, col = colours.green) {
        const ampW = w / this.bins

        push()
        translate(x, y)

        for (let i = 0; i < this.bins; i++) {
            const amp = this.spectrum[i];
            const ampX = ampW * i
            const ampY = map(amp, 0, 256, h, 0);
            noStroke()
            fill(col)
            rect(ampX, ampY, ampW, h - ampY);
        }
        pop()
    }

    showLows(x, y, w, h, angle, col = colours.pink) {
        const lows = this.levels.lows
        const lowBins = lows.length
        const ampW = w / lowBins

        push()
        translate(x, y)
        rotate(angle)

        noFill()
        beginShape()
        for (let i = 0; i < lowBins; i++) {
            const amp = lows[i];
            const ampX = ampW * i
            const ampY = map(amp, 0, 256, h, 0);
            stroke(col)
            vertex(ampX, ampY);
        }
        endShape()
        pop()
    }

    showMids(x, y, r, fromCol = colours.orange, toCol = colours.purple) {
        const mids = this.levels.lows
        const midBins = mids.length


        push()
        translate(x, y)

        noFill()
        strokeWeight(3)
        beginShape()
        for (let i = 0; i < midBins; i++) {
            const a = map(i, 0, midBins, 0, 360)
            const ampD = map(mids[i], 0, 255, r / 2, r * 2)

            const px = sin(a) * ampD
            const py = cos(a) * ampD
            vertex(px, py)
        }
        endShape()

        pop()
    }
}