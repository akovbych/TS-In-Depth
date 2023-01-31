
import { Category } from '../enums';
import { logFirstAvailable, getAllBooks, logBookTitles, getBookTitlesByCategory, getBookAuthorByIndex, calcTotalPages, getBookByID, checkoutBooks, getTitles } from '../functions';
import { Book } from '../interfaces';
import { BookOrUndefined } from '../types';

logFirstAvailable(getAllBooks());
logFirstAvailable();
logBookTitles(getBookTitlesByCategory(Category.JavaScript));
logBookTitles(getBookTitlesByCategory());
console.log(getBookAuthorByIndex(2));
console.log(calcTotalPages());

console.log(getBookByID(1));

const myBooks = checkoutBooks('Ann', 1, 2, 4);
console.log(myBooks);

console.log(getTitles(true));

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
