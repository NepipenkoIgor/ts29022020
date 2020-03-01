function getFullName(this: { name: string, surname: string }) {
    return `${this.name} ${this.surname}`
}

getFullName();

let account = {
    name: 'Ihor',
    surname: 'Nepipenko',
    age: 33,
    getFullName
}

account.getFullName();


type HandlerCb = (this: void, e: Event) => void

class UIElement {
    addClickHandler(_onclick: Handler): void {

    }
}

class Handler {
    info!: string;

    onClickBad(this: this, _e: Event) {
        this.info = 'message'
    }
}

let h = new Handler();
let uiElement = new UIElement();
uiElement.addClickHandler(h.onClickBad)
