class AudioFrame {
    constructor(spectrum) {
        this.spectrum = spectrum
        this.bins = this.spectrum.length

        this.levels = {
            lows: this.spectrum.slice(0, this.bins/3),
            mids: this.spectrum.slice(this.bins/3, 2*this.bins/3),
            highs: this.spectrum.slice(this.bins-5)
        }
    }

    showFullSpectrum(x, y, w, h, col=colours.green) {
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

    showLows(x, y, w, h, angle, col=colours.pink) {
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
}