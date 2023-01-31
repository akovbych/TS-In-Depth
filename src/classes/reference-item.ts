/* eslint-disable no-underscore-dangle */
import * as Interfaces from '../interfaces';

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


export { ReferenceItem };
