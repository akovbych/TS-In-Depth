// import './Tasks/02';
// import './Tasks/03';
// import './Tasks/04';
// import './Tasks/05';
import { Shelf } from './classes';
import { Library } from './classes/library';
import { Category } from './enums';
import { createCustomer, getObjectProperty, purge } from './functions';
import { Book, Magazine } from './interfaces';
import { BookRequiredFields, CreateCustomerFunctionType, UpdatedBook } from './types';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// Task 06.05
const flag = false;

if (flag) {
    import('./classes').then(obj => {
        const reader = new obj.Reader();
        reader.name = 'Anton';
        console.log(reader);
    })
        .catch(console.log);
}

// if (!flag) {
//     const obj = await import('./classes');
//     const reader = new obj.Reader();
//     reader.name = 'Anton';
//     console.log(reader);
// }

// Task 06.06
// let lib: Library = new Library();

// Tas 07.01
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

// const r1: Book[] = purge<Book>(inventory);
// console.log(r1);
// const r2 = purge([1, 2, 3, 4]);
// console.log(r2);

// Task 07.02, 07.03
const bookShelf = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
console.log(bookShelf.getFirst());

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];
const magazineShelf = new Shelf<Magazine>();
magazines.forEach(mag => magazineShelf.add(mag));
console.log(magazineShelf.getFirst());

magazineShelf.printTitles();
console.log(magazineShelf.find('Five Points'));
console.log(getObjectProperty(magazines[0], 'publisher'));
console.log(getObjectProperty(inventory[0], 'author'));

// Task 07.04
const bookRequiredFields: BookRequiredFields = {
    id: 1,
    author: 'Anton',
    available: true,
    category: Category.Angular,
    markDamaged: null,
    pages: 100,
    title: 'Title',
};
const updatedBook: UpdatedBook = {};
const params: Parameters<CreateCustomerFunctionType> = ['Anton'];
createCustomer(...params);
