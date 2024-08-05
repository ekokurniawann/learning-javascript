// Function expression sederhana
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("Roger"));

// Function expression dengan beberapa parameter
const add = function(a, b) {
    return a + b;
};

console.log(add(5, 3));

// Function expression sebagai parameter
function processOperation(operation, x, y) {
    return operation(x, y);
}

const multiply = function(a, b) {
    return a * b;
};

console.log(processOperation(multiply, 4, 5));

// Mengembalikan function dari function (closure)
const createCounter = function() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
};

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

// Function expression dalam array
const operations = [
    function(a, b) {
        return a + b;
    },
    function(a, b) {
        return a - b;
    },
    function(a, b) {
        return a * b;
    },
    function(a, b) {
        return a / b;
    },
];

console.log(operations[0](10, 5));
console.log(operations[1](10, 5));
console.log(operations[2](10, 5));
console.log(operations[3](10, 5));

// Function expression dalam object literal
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    },
};

console.log(calculator.add(8, 2));
console.log(calculator.subtract(8, 2));
console.log(calculator.multiply(8, 2));
console.log(calculator.divide(8, 2));

// Function expression dengan parameter default
const greetWithDefault = function(name = "Roger") {
    return `Hello, ${name}!`;
};

console.log(greetWithDefault());
console.log(greetWithDefault("Danuarta"));

// Function expression dengan callback
const fetchData = function(callback) {
    const data = { id: 1, name: "Item" };
    callback(data);
};

fetchData(function(result) {
    console.log("Fetched data:", result);
});

// Function Mengembalikan Function (Factory Function)
const createPerson = function(name, age) {
    return {
        getName: function() {
            return name;
        },
        getAge: function() {
            return age;
        },
        birthday: function() {
            age += 1;
        },
    };
};

const person = createPerson("John", 30);
console.log(person.getName());
console.log(person.getAge());
person.birthday();
console.log(person.getAge());

// Function Expression sebagai Method
const mathUtils = {
    power: function(base, exponent) {
        return Math.pow(base, exponent);
    },
    sqrt: function(value) {
        return Math.sqrt(value);
    },
};

console.log(mathUtils.power(2, 3));
console.log(mathUtils.sqrt(16));
