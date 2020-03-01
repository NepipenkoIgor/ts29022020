interface CB {
    (a: number, b: string): string
}

let fn: CB = (_a, _b): string => {
    return '';
}


function isString(item: string | number): item is string {
    return typeof item === 'string';
}

type  sn = string | number;

function average(a: number, b: string): string;
function average(a: string, b: number): string;
function average(...args: sn[]): string {
    let total: number = 0;
    for (const arg of args) {
        if (isString(arg)) {
            total += Number(arg);
            continue;
        }
        total += arg;
    }
    const avg: number = total / args.length;
    return `Average is ${avg}`;
}

average(1, '1');
average('1', 1);

average(1);
average(1, 2);
average(1, 3, 3, 3);
average(1, '3', 3);
let res: number = average(1, 2, 1);


let arr: number[] = [1, 2, 3];

arr.map((item)=>{
    item.
})
