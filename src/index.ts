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
