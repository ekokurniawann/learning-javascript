// Undefined
let x;
console.log(typeof (x)); // typeof digunakan memastikan tipe data pada variabel


// Number : Mencakup nilai numerik, baik bilangan bulat maupun desimal 
let x1 = 10; // integer  
let y = 17.25; // float 
console.log(typeof (x1));
console.log(typeof (y));

let a = 12;
let b = 9;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)


// Increment and decrement 
let postfix = 5;
console.log(postfix++); // meningkatkan nilai postfix setelah nilai digunakan
console.log(postfix);

let prefix = 5;
console.log(++prefix); // meningkatkan nilai prefix sebelum nilai digunakan


// BigInt
const bigNumber = 1234567890123456789012345678901234567890n; // ini adalah tipe BigInt
const myInt = 1234567890123;

console.log(bigNumber);
console.log(myInt);

console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n); // pada operasi pembagian hasilkan akan dibulatkan ke bawah tanpa mengandung nilai desimal
console.log(5n % 2n);


// Strings 
let greet = "Hello";
console.log(typeof (greet));

// Menggunakan escape characters 
const answer = "\"I think it's awesome!\" he answered confidently";
console.log(answer);

// Concatetantion dan interpolation 
let moreGreet = greet + greet;
console.log(moreGreet);

const myName = "Luke";
console.log(`Hello, my name is ${myName}`) // mendefinisikan string template, perlu menggunakan backticks (``)


// Boolean 
let x2 = true;
let y1 = false;

console.log(typeof (x2));
console.log(typeof (y1));


const a1 = 10;
const b1 = 12;

let isGreater = a1 > b1; // Boolean digunakan dalam operasi komparasi
let isLess = a1 < b1;
console.log(isGreater);
console.log(isLess);


// Null
let someLaterData = null;
console.log(someLaterData);


// Symbol 
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 == id2);


// Tipe data non-primitif
let person = {
    name: "John",
    age: 30,
    greet: function() {
        return "Hello, " + this.name;
    }
}


console.log(person.name); // Dot notation
console.log(person["age"]); // Bracket notation
console.log(person.greet());

// Contoh penggunaan dinamis dengan bracker notation
let propName = "name";
console.log(person[propName]);

/*
Gunakan dot notation (person.name) untuk akses yang lebih cepat dan mudah dibaca ketika nama properti valid sebagai identifier.
Gunakan bracket notation (person["name"]) untuk mengakses properti dengan nama dinamis, properti dengan nama yang tidak valid sebagai identifier, atau properti dengan karakter khusus.
 */
