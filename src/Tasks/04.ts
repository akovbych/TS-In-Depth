import { Logger, Author, Librarian } from '../interfaces';


const logDamage: Logger = (reason: string): void => {
    console.log(`Damaged: ${reason}`);
};

logDamage('missing back cover');

const favoriteAuthor: Author = {
    name: 'Anna',
    email: 'anna@example.com',
    numBookPublished: 1,
};

const favoriteLibrarian: Librarian = {
    name: 'Anton',
    email: 'anton@example.com',
    department: 'Classical',
    assistCustomer: null,
};

const offer: any = { book: { title: 'Essential TypeScript' } };

console.log(offer.magazine);
console.log(offer.magazine?.getTitle());
console.log(offer.book.getTitle?.());
console.log(offer.book.authors?.[0]);

// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));
