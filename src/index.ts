// interface/type/class/function

type Info = { email: string, password: string };

interface Person<GeneralInfo extends Info = Info , Id = number> {
    id: Id,
    name: string,
    info: GeneralInfo
}

const admin: Person<Info> = {
    id: 1,
    name: 'Ihor',
    info: {
        email: 'a@a',
        password: '123123'
    }
}

const user: Person<Info & { male: boolean }> = {
    id: 1,
    name: 'Oleg',
    info: {
        male: true,
        email: 'a@a',
        password: '123123'
    }
}


function getProperty<T, K extends keyof  T>(obj: T, key: K) {
    return obj[key];
}
// keyof  T => 'name' | 'age'
const myKey = 'age';
getProperty({name: 'Ihor', age: 33}, myKey);

