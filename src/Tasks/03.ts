import { createCustomerID, createCustomer } from '../functions';

let myID: string = createCustomerID('Ann', 10);
console.log(myID);

let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${id}-${name}`;
idGenerator = createCustomerID;
console.log(idGenerator('Ann', 10));

createCustomer('Anton');
createCustomer('Anton', 25);
createCustomer('Anton', 25, 'Kyiv');

// function bookTitleTransform(title: any): string {
//     assertStringValue(title);

//     return [...title].reverse().join('');
// }

// console.log(bookTitleTransform('TypeScript'));
// console.log(bookTitleTransform(1));
