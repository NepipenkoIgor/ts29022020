import { generateMenu } from './src-menu/menu';
import { list } from './src-menu/menu/data';

$('.menu')
    .html(generateMenu(list))
    .on('click', (e: Event) => {
        const el: HTMLElement = e.target as HTMLElement;
        if (!el.classList.contains('title')) {
            return;
        }
        const parentLi: HTMLLIElement = el.parentElement as HTMLLIElement;
        parentLi.classList.toggle('menu-open');
    });


// const navMenu = document.querySelector('.menu') as HTMLDivElement;
// navMenu.innerHTML = generateMenu(list);
// navMenu.addEventListener('click', (e: MouseEvent) => {
//     const el: HTMLElement = e.target as HTMLElement;
//     if (!el.classList.contains('title')) {
//         return;
//     }
//     const parentLi: HTMLLIElement = el.parentElement as HTMLLIElement;
//     parentLi.classList.toggle('menu-open');
// });
