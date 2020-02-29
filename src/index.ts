type NonReadonly<T> = {
    -readonly [P in keyof T]-?: T[P]
}

type account = {
    readonly firstName: string;
    readonly age: number;
}

let person: NonReadonly<account> = {
    firstName: 'Ihor',
}

type Person = {
    readonly name: string;
    age: number;
    info: {
        male: boolean;
    }
}

let p1: Partial<Person> = {
    age: 22
}


type RemoveByType<T, E> = {
    [P in keyof T]: T[P] extends E ? never : P
}[keyof T]

const p: RemoveByType<Person, string | number> = 1;

let a: Exclude<any, any>


type Point = { x: number, y: number }
const a: Point[keyof Point] = 'asd'
