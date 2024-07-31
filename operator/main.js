// Assigment Operator adalah tanda sama dengan (=)
let x = 10;
let y = 5;

x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;
console.log(x)

// Comparasion operator 
let a = 10;
let b = 12;

console.log(a < b);
console.log(a > b);

// Perbedaan anatara sama (==) dan indentik (===)
const aString = '10';
const aNumber = 10;


console.log(aString == aNumber) // true, karena nilai nya sama-sama 10 
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

// Logical operator
let a1 = 10;
let b1 = 12;

// AND OPERATOR 
console.log(a1 < 15 && b1 > 10); // (true && true) -> true
console.log(a1 > 15 && b1 > 10); // (false && true) -> false

// OR OPERATOR 
console.log(a1 < 15 || b1 > 10); // (true && true) -> true
console.log(a1 > 15 || b1 > 10); // (false && true) -> true

// NOT OPERATOR 
console.log(!(a1 < 15)); // !(true) -> false 
console.log(!(a1 < 15 && b1 > 10)); // !(true && true) -> !(true) -> false



