import { Book, Person } from './interfaces';

type BookProperties = keyof Book;

type PersonBook = Person & Book;

type BookOrUndefined = Book | undefined;

export { Book, BookOrUndefined, BookProperties, PersonBook };
