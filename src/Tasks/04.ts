

interface DamageLogger {
    (reason: string): void;
}

const logDamage: DamageLogger = (reason: string): void => {
    console.log(`Damaged: ${reason}`);
};

logDamage('missing back cover');

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBookPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}

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

type BookProperties = keyof Book;

function getProperty(book: Book, prop: BookProperties): any {
    const value = book[prop];
    return typeof value === 'function' ? value.name : value;
}

// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));
