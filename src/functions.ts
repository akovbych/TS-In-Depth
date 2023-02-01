/* eslint-disable no-redeclare */

import { Category } from './enums';
import { Book, TOptions } from './interfaces';
import { BookOrUndefined, BookProperties } from './types';
import RefBook from './classes/encyclopedia';

export function getAllBooks(): readonly Book[] {
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

export function logFirstAvailable(books: readonly Book[] = getAllBooks()) {
    console.log(`There is ${books.length} available`);
    const availableBooks = books.filter(({ available }) => available);
    if (availableBooks.length > 0) {
        console.log(`Name of first book is ${availableBooks[0].title}`);
    }
}

export function getBookTitlesByCategory(categoryFilter: Category = Category.JavaScript): string[] {
    const books = getAllBooks();

    return books.filter(({ category }) => category === categoryFilter).map(({ title }) => title);
}

export function logBookTitles(items: any[]) {
    console.log(items);
}

export function getBookAuthorByIndex(id: number): [title: string, author: string] {
    const books = getAllBooks();

    const filteredBooks = books.filter(book => book.id === id);

    if (filteredBooks.length === 1) {
        return [filteredBooks[0].title, filteredBooks[0].author];
    } else {
        throw new Error('Book not found');
    }
}

export function calcTotalPages(): bigint {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];
    let pages: bigint = 0n;

    data.forEach(item => pages += BigInt(BigInt(item.books) * BigInt(item.avgPagesPerBook)));

    return pages;
}


export function getBookByID(neededID: number): BookOrUndefined {
    const books = getAllBooks();

    return books.find(({ id }) => id === neededID);
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer: ${customer}`);

    return bookIDs
        .map(id => getBookByID(id))
        .filter(({ available }) => available)
        .map(({ title }) => title);
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
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

export function createCustomerID(name: string, id: number): string {
    return `${id}-${name}`;
}

export function createCustomer(name: string, age?: number, city?: string) {
    console.log(`Customer name is ${name}`);
    if (age) console.log(`Customer age is ${age}`);
    if (city) console.log(`Customer city is ${city}`);
}

export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('Value should been a string');
    }
}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not an instance of RefBook');
    }
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}

export function getProperty(book: Book, prop: BookProperties): any {
    const value = book[prop];
    return typeof value === 'function' ? value.name : value;
}

export function setDefaultConfig(options: TOptions): TOptions {
    options.duration ??= 200;
    options.speed ??= 90;
    return options;
}

export function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}

export function getObjectProperty<TObject extends object, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
    const value = obj[prop];
    return typeof value === 'function' ? value.name : value;
}
