const persona = {
    name: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zipCode: 12345678,
        latitude: 45.2343,
        altitude: 32.2233,
    }
}

const persona2 = { ...persona };
persona2.name = 'Peter';

console.log(persona);
console.log(persona2);