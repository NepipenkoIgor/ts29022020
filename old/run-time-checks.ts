import 'reflect-metadata';

function checkTypeInRuntime(target: any, key: string): void {
    const {name: type}: { name: string } = Reflect.getMetadata('design:type', target, key)
    let val: any;
    Object.defineProperty(target, key, {
        get(): any {
            return val;
        },
        set(v: any): void {
            const actualType = typeof v;
            if (actualType !== type.toLowerCase()) {
                throw new Error(`type of ${key} is not ${type}. You tried to set ${actualType}`)
            }
            val = v;
        }
    })
}

class User {
    @checkTypeInRuntime
    public firstName!: string;
}

const user = new User();
user.firstName = 'Ihor';
setTimeout(() => {
    try {
        (user.firstName as any) = 123;
    } catch {
        console.log(user.firstName)
    }


}, 5000)
