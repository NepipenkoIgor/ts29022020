class Search {
    public constructor(private  el: HTMLInputElement) {
        this.el.addEventListener('input', this.onSearch.bind(this))

    }

    @debounce(300)
    //@logErrorToSentry
    private onSearch(this: this, _e: Event) {
        console.log(this)
        // throw new Error('some error')
        ///const value = (e.target as HTMLInputElement).value;

    }
}


const input = document.querySelector('input') as HTMLInputElement;
new Search(input);


function debounce<T>(ms: number) {
    let timeId: number | null;
    return function (_target: T, _key: string, descriptor: PropertyDescriptor): void {
        const originalValue = descriptor.value;
        descriptor.value = function (this: T, ...args: any[]) {
            if (timeId) {
                clearTimeout(timeId)
            }
            timeId = setTimeout(() => {
                originalValue.call(this, ...args);
            }, ms)
        }
        // return {
        //     ...descriptor,
        //     value: function (this: T, ...args: any[]) {
        //         if (timeId) {
        //             clearTimeout(timeId)
        //         }
        //         timeId = setTimeout(() => {
        //             originalValue.call(this, ...args);
        //         }, ms)
        //     }
        // }
    }
}

// function logErrorToSentry(_target: any, _key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
//     const originalValue = descriptor.value;
//     return {
//         ...descriptor,
//         value: (...args: any[]) => {
//             try {
//                 originalValue(...args);
//             } catch (err) {
//                 console.log(err)
//                 // http to sentry service
//             }
//         }
//     }
// }
