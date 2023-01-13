type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
};

enum Category { JavaScript, CSS, HTML, TypeScript, Angular }

logFirstAvailable(getAllBooks());
logBookTitles(getBookTitlesByCategory(Category.JavaScript));
console.log(getBookAuthorByIndex(2));
console.log(calcTotalPages());

function getAllBooks(): Book[] {
    return [
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
}

function logFirstAvailable(books: Book[]) {
    console.log(`There is ${books.length} available`);

    if (books.length > 0) {
        console.log(`Name of first book is ${books[0].title}`);
    }
}

function getBookTitlesByCategory(category: Category): Book[] {
    const books = getAllBooks();

    return books.filter(book => book.category === category);
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
    const data = [
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];
    let pages: bigint = 0n;

    data.forEach(item => pages += BigInt(item.books * item.avgPagesPerBook));

    return pages;
}
