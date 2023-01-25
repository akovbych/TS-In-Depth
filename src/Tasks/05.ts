/* eslint-disable no-underscore-dangle */
abstract class ReferenceItem {
    // title: string;
    // year: number;
    // constructor(newTitle: string, newYear: number) {
    constructor(public title: string, protected year: number, public id: number) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
        // this.title = newTitle;
        // this.year = newYear;
    }

    printItem() {
        console.log(`title was published in year ${this.year}`);
        console.log(ReferenceItem.department);
    }

    private _publisher: string = 'anton';

    get publisher() {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }
    #id: number;

    getID() {
        return this.#id;
    }

    static department: string = 'department';

    abstract printCitation(): void;
}

// const ref = new ReferenceItem('title', 2023, 123);
// ref.printItem();
// console.log(ref.publisher);
// console.log(ref.getID());


class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, id: number, public edition: number) {
        super(title, year, id);
    }
    override printItem() {
        console.log(`title was published in year ${this.year}`);
        console.log(ReferenceItem.department);
        console.log(`Edition ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title}-${this.year}`);
    }
}

const refBook = new Encyclopedia('title', 2023, 1, 1);
refBook.printItem();
refBook.printCitation();
