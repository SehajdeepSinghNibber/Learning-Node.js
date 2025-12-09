const greet = require('./greet');

const message = greet('World');
console.log(message); // Outputs: Hello, World!


const { person1, person2, person3 } = require('./peoples');

console.log(person1); // Outputs: John
console.log(person2); // Outputs: Doe
console.log(person3); // Outputs: Smith