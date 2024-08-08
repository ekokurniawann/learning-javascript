function greet(...names) {
  console.log("Names:", names);
}

greet("Alice", "Balmond", "Roger");

// Menggunakan rest parameter bersama parameter lainnya
function describePerson(age, ...traits) {
  console.log("Age:", age);
  console.log("Traits:", traits);
}

describePerson(30, "kind", "smart", "funny");

// Menggunakan rest parameter dengan metode array
function calculateSum(...numbers) {
  const sum = numbers.reduce((total, num) => total + num, 0);
  console.log("Sum:", sum);
}

calculateSum(1, 2, 3, 4, 5);

// Rest parameter dalam destructuring array
const colors = ["red", "green", "blue", "yellow", "purple"];

const [primary, secondary, ...others] = colors;

console.log("Primary:", primary);
console.log("Secondary:", secondary);
console.log("Others:", others);

//
function logDetails(name, age, ...details) {
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Details:", details);
}

logDetails("Roger", 25, "Engineer", "Live in Yogyakarta", "Loves hiking");
