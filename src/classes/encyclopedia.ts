/* eslint-disable no-underscore-dangle */
import { positiveInteger, timeout } from '../decorators';
import { ReferenceItem } from './reference-item';

export default class Encyclopedia extends ReferenceItem {
    private _copies: number;

    get copies(): number {
        return this._copies;
    }

    @positiveInteger
    set copies(value: number) {
        this._copies = value;
    }

    constructor(title: string, year: number, id: number, public edition: number) {
        super(title, year, id);
    }

    @timeout(5000)
    override printItem() {
        console.log(`title was published in year ${this.year}`);
        console.log(ReferenceItem.department);
        console.log(`Edition ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title}-${this.year}`);
    }
}
