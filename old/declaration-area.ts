interface UserAccount {
    firsName: string;
    age: number;
}

let person = UserAccount;

let account = {
    firstName: 'Ihor',
    age: 33
}

class User {
    firstName!: string;
    age!: number;
}

let user: User = account;
