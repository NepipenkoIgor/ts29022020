// T extends U ? X : U

type nonUndefined<T> = T extends (undefined | null) ? never : T;
type snbu = string | number | null | undefined;
const a: nonUndefined<snbu> = undefined;


// Type of first element of typle array
const arr1: [() => boolean, string];
const arr2: [() => number[], number];

type FirstElType<T> =
    T extends [unknown, infer C, ...unknown[]]
        ? C  // extends (...args: any[]) => infer R ? R : never
        : never


const b: number = 's';

let a: Exclude<any, any>
