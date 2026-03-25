class AudioFrame {
    constructor(spectrum) {
        this.spectrum = spectrum
        this.bins = this.spectrum.length
    }

    showFullSpectrum(x, y, w, h, col) {
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
}