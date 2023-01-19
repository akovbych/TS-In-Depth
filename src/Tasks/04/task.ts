const myBook: Book = {
    id: 5,
    title: 'Colors',
    author: 'author',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged(reason: string): void {
        console.log(`Damaged: ${reason}`);
    }
};

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
