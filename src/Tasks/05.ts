import { ReferenceItem, UL } from '../classes';
import RefBook from '../classes/encyclopedia';
import { Category } from '../enums';
import { Librarian, TOptions } from '../interfaces';
import { PersonBook } from '../types';
import { printRefBook, setDefaultConfig } from '../functions';
// const ref = new ReferenceItem('title', 2023, 123);
// ref.printItem();
// console.log(ref.publisher);
// console.log(ref.getID());

const refBook = new RefBook('title', 2023, 1, 1);
refBook.printItem();
refBook.printCitation();

const favoriteLibrarian05: Librarian = new UL.UniversityLibrarian();
favoriteLibrarian05.name = 'Anton';
favoriteLibrarian05.assistCustomer('Boris', 'Learn TypeScript');

const personBook: PersonBook = {
    author: 'Anna',
    available: false,
    category: Category.Angular,
    email: 'anna@example.com',
    id: 1,
    name: 'Anna',
    title: 'title',
};

const config: TOptions = {};
console.log(setDefaultConfig(config));

printRefBook(new RefBook('title', 2023, 1, 1));
printRefBook(new UL.UniversityLibrarian());
