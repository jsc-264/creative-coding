class AudioProcessor {
    constructor(song, smoothing = 0.9, bins = 512){
        this.song = song

        this.fft = new p5.FFT(smoothing, bins);
        this.fft.setInput(song)

        this.maxVolumeTimelineLength = 200
        this.volumeTimeline = []
    }

    getCurrentVolume(){
        const freqRanges = ["bass", "lowMid", "mid", "highMid", "treble"]
        let vol = 0

        for (let range of freqRanges) {
            const rangeVol = this.fft.getEnergy(range)
            vol += rangeVol
        }

        vol /= freqRanges.length

        return vol
    }

    analyseData(){
        this.spectrum = this.fft.analyze()
        this.bins = this.spectrum.length

        this.spectrumLevels = {
            lows: this.spectrum.slice(0, this.bins / 3),
            mids: this.spectrum.slice(this.bins / 3, 2 * this.bins / 3),
            highs: this.spectrum.slice(this.bins - 5)
        }

        this.CurrentVolume = this.getCurrentVolume();

        this.volumeTimeline.push(this.CurrentVolume)

        if (this.volumeTimeline.length > this.maxVolumeTimelineLength) {
            this.volumeTimeline.shift()
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
        const lows = this.spectrumLevels.lows
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

            strokeWeight(2)
            stroke(col)
            vertex(ampX, ampY);
        }
        endShape()
        pop()
    }

    radial(level, r) {
        beginShape()
        for (let i = 0; i < level.length; i++) {
            const a = map(i, 0, level.length, 0, 360)
            const ampD = map(level[i], 0, 255, r / 4, r * 2)

            const px = sin(a) * ampD
            const py = cos(a) * ampD
            vertex(px, py)
        }
        endShape()
    }

    showMids(x, y, r, col = colours.purple) {
        const mids = this.spectrumLevels.lows

        push()
        translate(x, y)

        noFill()
        stroke(col)
        strokeWeight(3)
        for (let i = 1; i <= 3; i++) {
            this.radial(mids, r * i / 2)
        }

        pop()
    }

    showVolumeTimeline(x, y, w, h, col = colours.orange){
        const ampW = w / this.volumeTimeline.length

        push()
        translate(x, y)

        strokeWeight(3)
        stroke(col)
        noFill()
        beginShape()
        for (let i = 0; i < this.volumeTimeline.length; i++){
            const ampX = ampW * i
            const ampY = map(this.volumeTimeline[i], 0, 255, h, 0)

            vertex(ampX, ampY)
        }

        endShape()

        pop()
    }
}