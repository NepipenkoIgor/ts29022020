// function average(a: number, b: number, c: number): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 2);
// average(1, '2', 3);
// let res: number = average(1, 2, 1);

// function average(a: number, b?: number, c?: number): string {
//     if (b === undefined) {
//         b = 0;
//     }
//     if (c === undefined) {
//         c = 0;
//     }
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 2);
// average(1, '2', 3);
// let res: number = average(1, 2, 1);

// function average(a: number, b: number = 0, c: number = 0): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 2);
// average(1, 3, 3, 3);
// average(1, '3', 3);
// let res: number = average(1, 2, 1);
function isString(item: string | number): item is string  {
    return typeof item === 'string';
}

function average(...args: (string | number)[]): string {
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



