class FpsCalc {
    constructor(bufferLen) {
        this.bufferLen = bufferLen;
        this.buffer = new Array(bufferLen);
        this.prevTime = performance.now();
        this.idx = 0;
    }

    update() {
        const currTime = performance.now();
        const elapsedMs = currTime - this.prevTime;
        this.buffer[this.idx++] = 1000 / elapsedMs;
        if (this.idx === this.bufferLen) {
            this.idx = 0;
        }
        this.prevTime = currTime;
    }

    get() {
        const sum = this.buffer.reduce((acc, val) => acc + val);
        return sum / this.bufferLen;
    }
}