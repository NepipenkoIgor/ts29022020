let firstName: 'Ihor' = 'asdasd'
let digits: 1 | 2 | 3 = 2;

enum AnimationType {
    'ease-in',
    'ease-out',
}

interface AnimateOptions {
    delay: number;
    easing: keyof typeof AnimationType;
}

class UIElement {
    animate(_options: AnimateOptions): void {
        switch (_options.easing) {
            case 'ease-out': {

            }
        }
    }
}

new UIElement().animate({delay: 3000, easing: 'ease-in'});

interface IFact {
    factId: number;
    useTo: string;
    userId: number;
}

const dataList: { action: string, data: IFact }[] = [];

const uniqueValue = (): keyof IFact => {
    return 'factId';
}

dataList.map((item) => {
    if (item.data[uniqueValue()] === 2) {
        //...;
    }
    return item;
})
let isValid: true = false;
let num: IFact['factId']
