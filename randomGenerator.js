class randomGenerator {
    constructor() {}

    seed = 1;
    random = 1;
    module = 1;

    cyrb128(str) {
        let h1 = 1779033703,
            h2 = 3144134277,
            h3 = 1013904242,
            h4 = 2773480762;

        for (let i = 0, k; i < str.length; i++) {
            k = str.charCodeAt(i);
            h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
            h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
            h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
            h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
        }

        h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
        h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
        h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
        h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);

        this.seed = [
            (h1 ^ h2 ^ h3 ^ h4) >>> 0,
            (h2 ^ h1) >>> 0,
            (h3 ^ h1) >>> 0,
            (h4 ^ h1) >>> 0,
        ];
    }

    sfc32(a, b, c, d) {
        a >>>= 0;
        b >>>= 0;
        c >>>= 0;
        d >>>= 0;

        var t = (a + b) | 0;

        a = b ^ (b >>> 9);
        b = (c + (c << 3)) | 0;
        c = (c << 21) | (c >>> 11);
        d = (d + 1) | 0;
        t = (t + d) | 0;
        c = (c + t) | 0;

        this.random = (t >>> 0) / 4294967296;

        return this.random;
    }

    initSeed(seed, page) {
        this.module = `${seed}${page}`;
        this.cyrb128(this.module);
    }

    getRandom(module) {
        this.module = this.module + module;
        this.cyrb128(String(this.module));
        this.sfc32(this.seed[0], this.seed[1], this.seed[2], this.seed[3])

        return this.random;
    }
}

const generator = new randomGenerator();
exports.generator = generator;
