import 'reflect-metadata';

const RANGE_KEY: unique symbol = Symbol('RANGE_KEY');

export function Validate(target: any, key: string, descriptor: PropertyDescriptor): void {
    const originalValue = descriptor.value;
    descriptor.value = (...args: any[]) => {
        const existingRange = Reflect.getMetadata(RANGE_KEY, target, key) || {};
        for (const [paramIndex, [min, max]] of Object.entries<[number, number]>(existingRange)) {
            const paramValue = args[Number(paramIndex)];
            if (paramValue < min || paramValue > max) {
                console.warn(`Error in ${target.constructor.name} instance.
                Parameter of method ${key} on position ${Number(paramIndex) + 1} out of range ${[min, max]}.
                Actual value is ${paramValue}`)
            }
        }
        return originalValue(...args);
    }
}

export function Range(min: number, max: number) {
    return (target: any, key: string, index: number) => {
        const existingRange: { [key: number]: [number, number] } = Reflect.getMetadata(RANGE_KEY, target, key) || {};
        existingRange[index] = [min, max];
        Reflect.defineMetadata(RANGE_KEY, existingRange, target, key);
    }
}
