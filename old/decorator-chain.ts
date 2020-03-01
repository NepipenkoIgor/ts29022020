function persistance(target: any, key: string): void {
    let _value = target [key];
    const localStorageKey = `${target.constructor.name}_${key}`;

    const getter = () => {
        const value = localStorage.getItem(localStorageKey) || _value;
        console.log(`Get ${key} => ${value}`)
        return value;
    }

    const setter = (newValue: string) => {
        console.log(`Set ${key} => ${newValue}`)
        _value = newValue;
        localStorage.setItem(localStorageKey, newValue)
    }

    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    })
};


class Account {
    @persistance
    public firstName!: string;
}

const user = new Account();

console.log(user.firstName);
user.firstName = 'Oleg';
setTimeout(()=>{
    user.firstName = 'Vlad';
}, 5000)
