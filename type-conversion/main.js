// Konversi eksplisit

// Mengubah ke string
const number = 123;
const boolean = true;

const strNumber = String(number);
const strBoolean = boolean.toString();

console.log(strNumber);
console.log(strBoolean);

// Mengubah ke number
const strNumber1 = "123";
const strFloat = "3.14";
const boolean1 = true;

const numFromString = Number(strNumber1);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean);

console.log(numFromString);
console.log(floatFromString);
console.log(numFromBoolean);

const cm = "20cm";
const px = "64px";

const intFromCM = parseInt(cm);
const intFromPX = parseInt(px);

console.log(intFromCM);
console.log(intFromPX);

const cm1 = "20.55cm";
const px1 = "64.23px";

const floatFromCM = parseFloat(cm1);
const floatFromPX = parseFloat(px1);

console.log(floatFromCM);
console.log(floatFromPX);

// Mengubah ke boolean
const number1 = 123;
const string = "Dicoding";
const empty = null;

const boolFromNumber = Boolean(123);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);

console.log(boolFromNumber);
console.log(boolFromString);
console.log(boolFromNull);

// Konversi implisit

const age = 20;
const message = "Umurku: " + age;

console.log(message);

const strNumber2 = "123";
const result = strNumber2 * 2;

console.log(result);

const bool3 = true;
const result3 = 1 + bool3;

console.log(result3);
