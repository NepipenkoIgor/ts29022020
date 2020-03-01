type Constructable = new (...args: any[]) => {}

function TimeStamped<BaseClass extends Constructable>(BC: BaseClass) {
    return class extends BC {
        public timestamp = new Date();
    }
}

function Tagged<BaseClass extends Constructable>(BC: BaseClass) {
    return class extends BC {
        public tags = ['ts', 'angular', 'js'];
    }
}

class Point {

    #d: number;

    public constructor(
        public x: number,
        protected y: number,
        private z: number
    ) {
        this.#d = 1;
    }

    public sum(): number {
        return this.x + this.y + this.z + this.#d;
    }
}
class CustomPoint extends TimeStamped(Tagged(Point)) {

}

const p = new CustomPoint(1, 2, 3);
console.log(p.tags);
console.log(p.timestamp);
console.log((p as any).#d);


