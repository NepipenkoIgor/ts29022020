/******/
let period = 60;
const baseUrl = 'http://localhost';
/******/
let firstName = 'Ihor';
const account = {
    firstName,
    getName() {
        return this.firstName;
    }
}
/******/
let person = {...account};
let dates = [...[11, 12, 13]];

/******/
let {firstName: username} = account;
let [, secondDate] = dates;

/******/
function userMessage([start, end]: TemplateStringsArray, {firstName: name}: typeof person) {
    return `${start}${name}${end}`
}

const message = userMessage`Good day, ${person} !!`;

/******/
for (const date of dates) {
    console.log(date);
}

/******/
let sum = (a: number, b: number) => a + b;


/******/
class Point {
    public x = 2;
    public y = 2;

    public sum() {
        return this.x + this.y;
    }
}

/******/
let user: any = {};
let x = user?.info?.male;

/****/
let admin;
let p = admin ?? person;
