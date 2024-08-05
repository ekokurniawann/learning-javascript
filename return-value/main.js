// Fungsi tanpa return value
function sayHello() {
  console.log("Hello, world!");
}

console.log("1.Fungsi tanpa return value:");
sayHello();
const result1 = sayHello();
console.log("Result:", result1); // undefined

// Fungsi dengan return value
function add(a, b) {
  return a + b;
}

console.log("\n2.Fungsi dengan return value sederhana:");
const sum = add(10, 5);
console.log(sum);

// Mengembalikan lebih dari satu nilai (object)
function getPersonInfo() {
  return {
    name: "Roger",
    age: 30,
  };
}

console.log("\n3.Mengembalikan objek:");
const person = getPersonInfo();
console.log("Name:", person.name);
console.log("Age:", person.age);

// Mengembalikan lebih dari satu nilai (array)
function getCoordinates() {
  return [100, 200];
}

console.log("\n4.Mengembalikan array:");
const [x, y] = getCoordinates();
console.log("X Coordinate:", x);
console.log("Y Coordinate:", y);

// Penggunaan return untuk kontrol alur
function checkEligibility(age) {
  if (age < 18) {
    return "Too young";
  }
  return "Eligible";
}

console.log("\n5.Menggunakan return untuk kontrol alur:");
console.log("Eligibility for age 16:", checkEligibility(16));
console.log("Eligibility for age 21:", checkEligibility(21));

// Fungsi Menggunakan Return di Dalam Fungsi Lain
function createGreeting(name) {
  function getGreetingMessage() {
    return `Hello, ${name}!`;
  }
  return getGreetingMessage();
}

console.log("\n6.Return di dalam fungsi lain:");
console.log(createGreeting("Roger"));

// Fungsi Asynchronous dengan Return Value (Promise)
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 1000);
  });
}

console.log("\n7.Fungsi asynchronous dengan return value:");
fetchData().then((response) => {
  console.log(response);
});
