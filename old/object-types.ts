// let user: {
//     firstName: string;
//     age?: number;
// }
//
// user = {
//     firstName: 'Ihor',
// }

const user: {
    readonly firstName: string;
    readonly  age: number;
} = {
    firstName: 'Ihor',
    age: 33,
}

user.firstName = 'Oleg';
user.age = 22;

let booleanMap: {
    [key: string]: boolean
} = {
    read: false,
    send: true,
}
let str: (typeof user)['firstName' | 'age'] = 1

let arr: readonly number[] = [1, 2, 3, 4];
arr[100] = 2;
arr.push(1);

let tupleArr: readonly [number, string] = [1, 'name']
tupleArr[100] = 2;
tupleArr.push(1);

// let x = 10 as const;
const x = 10;
let y: typeof x = 2;

let y = [10, 'name'] as const;
y[100] = 2;
y.push(1);

let account = {firstName: 'Ihor', age: 33} as const;
account.age = 22;
let person: typeof account = {
    firstName: 'Oleg', age: 33
}
