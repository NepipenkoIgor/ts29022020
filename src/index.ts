let anyType: any = 3;
anyType.a = 1;
anyType['a'] = 1;
anyType = 1;
anyType();

let unknownType: unknown = {};
unknownType.a = 1;
unknownType['a'] = 1;
unknownType = 1;
unknownType();


let voidType: void = undefined;

function myAlert(): void {

}
