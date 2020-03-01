interface IPoint {
    x: number;

    sum(): number;
}

class Point implements IPoint {

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

class CustomPoint extends Point implements IPoint {
    constructor(x: number, y: number, z: number) {
        super(x, y, z);
    }

    public sum(): number {
        return super.sum();
    }
}

const p = new Point(1, 2, 3);

