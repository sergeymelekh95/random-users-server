const rnd = require('random-seed');

class randomGenerator {
    constructor() {
        this.seed = 1;
        this.random = 1;
        this.module = 1;
    }

    initSeed(seed, page) {
        this.seed = `${seed}${page}`;
        this.random = rnd.create(this.seed);
    }

    getRandom(module) {
        return this.random(module);
    }
}

const generator = new randomGenerator();
exports.generator = generator;
