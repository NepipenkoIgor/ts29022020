let firstName = 'Ihor';
let account = {
    name: 'Ihor',
    age: 33
}
let person: typeof account;


let isDone: boolean = true;

let num: number = 6;
num = 0b1010;
num = NaN;
num = Infinity;
num = null;

let str: string = 'Ihor';
str = `${num}`;
str = undefined;

let nill: null = null;
nill = undefined;
let und: undefined = undefined;


let bigInt: bigint = 4n;

const key1: symbol = Symbol('key1');
const key2: unique symbol = Symbol('key2');
const key3 = Symbol('key3');

let strictObj = {
    [key1]: 'value 1',
    [key2]: 'value 2',
    [key3]: 'value 3',
}

const value1 = strictObj[key1];
const value2 = strictObj[key2];
const value3 = strictObj[key3];
