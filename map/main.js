// Membuat map
const myMap = new Map();
console.log(myMap);

// Menginisialisasi map dengan nilai
const myMap1 = new Map([
    ["1", "a String key"],
    [1, "a number key"],
    [true, true],
]);

console.log(myMap1);

// Mendapatkan dan menetapkan nilai
const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"],
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));

// Penggunaan metode yang salah
//const wrongMap = new Map();
//wrongMap["My Key"] = "My Value";
//
//console.log(wrongMap.has("My Key"));
//console.log(wrongMap.delete("My Key"));

// Membuat dan mengoperasikan map sederhana
const myMap2 = new Map();
myMap2.set("name", "Alice");
myMap2.set("age", 25);
myMap2.set("country", "Wonderland");

console.log(myMap2.get("name"));
console.log(myMap2.has("age"));
console.log(myMap2.size);

myMap2.delete("country");
console.log(myMap2.size);

myMap2.clear();
console.log(myMap2.size);

// Menggunakan iterator
const fruits = new Map([
    ["apple", 10],
    ["banana", 5],
    ["orange", 8],
]);

for (const [key, value] of fruits) {
    console.log(`${key}: ${value}`);
}

for (const key of fruits.keys()) {
    console.log(key);
}

for (const value of fruits.values()) {
    console.log(value);
}

for (const [key, value] of fruits.entries()) {
    console.log(`${key}: ${value}`);
}

// Kompleks
class Book {
    constructor(title, author) {
        (this.title = title), (this.author = author);
    }
}

const library = new Map();

const book1 = new Book("1984", "George Orwell");
const book2 = new Book("Brave New World", "Aldous Huxley");
const book3 = new Book("Fahrenheit 451", "Ray Bradbury");

library.set(book1, { shelf: "A1", available: true });
library.set(book2, { shelf: "B3", available: false });
library.set(book3, { shelf: "C2", available: true });

console.log(library.get(book1));

library.set(book2, { shelf: "B3", available: true });
console.log(library.get(book2));
