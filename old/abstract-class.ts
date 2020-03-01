abstract class AbstractFormControl<Model> {
    public abstract model: Model;

    public focus(): void {

    }

    public blur(): void {

    }

    public abstract updateModel(_model: Model): void;
}

class Input extends AbstractFormControl<string> {
    public model: string = '';

    public updateModel(_model: string): void {
        console.log(_model);
    }
}

interface IDropDownModel {
    text: string,
    value: string
};

class DropDown extends AbstractFormControl<IDropDownModel[]> {
    public model: IDropDownModel [] = [];

    public updateModel(_model: IDropDownModel []): void {
        console.log(_model);
    }
}
