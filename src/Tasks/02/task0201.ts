/* eslint-disable no-redeclare */

type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
};

enum Category { JavaScript, CSS, HTML, TypeScript, Angular }

logFirstAvailable(getAllBooks());
logFirstAvailable();
logBookTitles(getBookTitlesByCategory(Category.JavaScript));
logBookTitles(getBookTitlesByCategory());
console.log(getBookAuthorByIndex(2));
console.log(calcTotalPages());

function getAllBooks(): readonly Book[] {
    const books = <const>[
        {
            id: 1,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: true,
            category: Category.JavaScript,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
            category: Category.JavaScript,
        },
        {
            id: 3,
            title: 'CSS Secrets',
            author: 'Lea Verou',
            available: true,
            category: Category.CSS,
        },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
            category: Category.JavaScript
        }
    ];
    return books;
}

function logFirstAvailable(books: readonly Book[] = getAllBooks()) {
    console.log(`There is ${books.length} available`);
    const availableBooks = books.filter(({ available }) => available);
    if (availableBooks.length > 0) {
        console.log(`Name of first book is ${availableBooks[0].title}`);
    }
}

function getBookTitlesByCategory(categoryFilter: Category = Category.JavaScript): string[] {
    const books = getAllBooks();

    return books.filter(({ category }) => category === categoryFilter).map(({ title }) => title);
}

function logBookTitles(items: any[]) {
    console.log(items);
}

function getBookAuthorByIndex(id: number): [title: string, author: string] {
    const books = getAllBooks();

    const filteredBooks = books.filter(book => book.id === id);

    if (filteredBooks.length === 1) {
        return [filteredBooks[0].title, filteredBooks[0].author];
    } else {
        throw new Error('Book not found');
    }
}

function calcTotalPages(): bigint {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];
    let pages: bigint = 0n;

    data.forEach(item => pages += BigInt(BigInt(item.books) * BigInt(item.avgPagesPerBook)));

    return pages;
}


function getBookByID(neededID: number): Book {
    const books = getAllBooks();

    return books.find(({ id }) => id === neededID);
}
console.log(getBookByID(1));

function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer: ${customer}`);

    return bookIDs
        .map(id => getBookByID(id))
        .filter(({ available }) => available)
        .map(({ title }) => title);
}

const myBooks = checkoutBooks('Ann', 1, 2, 4);
console.log(myBooks);

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            return books.filter(({ author }) => author === arg).map(({ title }) => title);
        } else if (typeof arg === 'boolean') {
            return books.filter(({ available }) => available === arg).map(({ title }) => title);
        }

    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter((book) => book.id === id && book.available === available).map(({ title }) => title);
        }
    }
}


console.log(getTitles(true));
