// Callback sederhana
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function afterGreeting() {
    console.log("This is the callback function");
}

greet("Roger", afterGreeting);

// Callback asinkron
function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched successfully!";
        callback(data);
    }, 2000);
}

function handlerData(data) {
    console.log(data);
}

fetchData(handlerData);

// Callback dalam array method (map)
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num + num);

console.log(squaredNumbers);

// Callback dengan object dan lexical 'this'
const person = {
    name: "Roger Danuarta",
    hobbies: ["climbing", "coding", "reading"],
    showHobbies: function() {
        this.hobbies.forEach((hobby) => {
            console.log(`${this.name} likes ${hobby}`);
        });
    },
};

person.showHobbies();

// Callback dalam promise
const fetchDataPromis = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
};

fetchDataPromis().then((message) => {
    console.log(message);
});

// Callback dalam Higher-Order function
const createMultiplier = (multiplier) => (num) => num * multiplier;

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));

// Callback dengan default parameter
const multiply = (a, b = 2) => a * b;

console.log(multiply(5));
console.log(multiply(5, 3));

// Callback dengan Rest Parameters
const sumAll = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

// Callback dan Destructuring dalam Parameter
const introduce = ({ name, age, job }) =>
    `Hi, I'm ${name}, ${age} years old, and I work as a ${job}.`;

const user = {
    name: "Eko",
    age: 22,
    job: "Developer",
};

console.log(introduce(user));
