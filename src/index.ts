/***Object/Function*/
//
// interface IUser {
//     firstName: string;
//     age: number;
// }
//
// type User = {
//     firstName: string;
//     age: number;
// }
//
// interface IGetUser {
//     (): string;
// }
//
// type GetUser = () => string;
//
// let fn: IGetUser = () => {
//     return 'string';
// }


/****** Extend ***/

interface IPartialPoint {
   readonly x?: { a: string };
}
interface IPartialPoint {
    y: { a: string };
}

type  PartialPoint = {
    x: { a: number, b: number };
}

type Point = {
    y: number;
}
// & IPartialPoint & PartialPoint;

interface IPoint extends PartialPoint {
    y: number;
}


const point: Point = {
    x: {
        a: 's',
        b: 1
    },
    y: 2,
}

type animation = 'ease-in' | 'ease-out';

/***** implements **/
class CustomPoint implements IPartialPoint, Point {
    x = {
        a: 's',
        b: 1
    };
    y =  2;
}

