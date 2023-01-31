import { ReferenceItem } from './reference-item';

export default class Encyclopedia extends ReferenceItem {
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
