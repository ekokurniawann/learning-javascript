// Arrow function sederhana
const greet = (name) => `Hello, ${name}!`;

console.log(greet("Roger"));

// Arrow function dengan multiple parameter
const add = (a, b) => a + b;

console.log(add(5, 3));

// Arrow function dengan Body yang lebih kompleks
const convertCelsiusToFahrenheit = (temperature) => {
    const result = (9 / 5) * temperature + 32;
    return result;
};

console.log(`90°C in Fahrenheit is: ${convertCelsiusToFahrenheit(90)}`);

// Arrow function dalam array methods
const numbers = [1, 2, 3, 4, 5];

// Menggunakan arrow function dengan map
const squaredNumbers = numbers.map((num) => num * num);

console.log(squaredNumbers);

// Arrow function dengan object dan lexical `this`
const person = {
    name: "Roger",
    hobbies: ["climbing", "coding", "reading"],
    showHobbies: function() {
        this.hobbies.forEach((hobby) => {
            console.log(`${this.name} likes ${hobby}`);
        });
    },
};

person.showHobbies();

// Arrow function sebagai callback dalam promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfuly!");
        }, 2000);
    });
};

fetchData().then((message) => {
    console.log(message);
});

// Arrow function dalam Higher-Order function
const createMultiplier = (multipler) => (num) => num * multipler;

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));

// Menggunakan arrow function untuk default parameter
const multiply = (a, b = 2) => a * b;

console.log(multiply(5));
console.log(multiply(5, 3));

// Menggunakan arrow function dengan rest parameter
const sumAll = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

console.log(sumAll(1, 2, 3, 4, 5));

// Arrow function dan Destructuring dalam parameter
const introduce = ({ name, age, job }) =>
    `Hi, I'm ${name}, ${age} years old, and I work as a ${job}.`;

const user = {
    name: "Roger Danuarta",
    age: 22,
    job: "Developer",
};

console.log(introduce(user));
