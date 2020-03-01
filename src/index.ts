import { Validate, Range } from './decorators';


class Calculator {
    @Validate
    public updatePercentage(
        @Range(40, 70) oldValue: number,
        @Range(40, 70) newValue: number
    ) {
        console.log(oldValue, newValue)
    }
}

const calc = new Calculator();

calc.updatePercentage(50, 50);
setTimeout(() => {
    calc.updatePercentage(22, 100)
}, 5000)
