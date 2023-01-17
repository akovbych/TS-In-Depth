function createCustomerID(name: string, id: number): string {
    return `${id}-${name}`;
}

let myID: string = createCustomerID('Ann', 10);
console.log(myID);

let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${id}-${name}`;
idGenerator = createCustomerID;
console.log(idGenerator('Ann', 10));

function createCustomer(name: string, age?: number, city?: string) {
    console.log(`Customer name is ${name}`);
    if (age) console.log(`Customer age is ${age}`);
    if (city) console.log(`Customer city is ${city}`);
}

createCustomer('Anton');
createCustomer('Anton', 25);
createCustomer('Anton', 25, 'Kyiv');
