const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18,
};

// Destrucuturing object
//const { firstName, lastName, age } = profile;
//
//console.log(firstName);
//console.log(lastName);
//console.log(age);

// Destrucuturing assigment
//let firstName = "Dimas";
//let age = 20;
//({ firstName, age } = profile);
//console.log(firstName);
//console.log(age);

// Destrucuturing dengan nilai default
//const { firstName, age, isMale = false } = profile;
//
//console.log(firstName);
//console.log(age);
//console.log(isMale);

// Menggunakan nama variabel lokal yang berbeda
const {
    firstName: localFirstName,
    lastName: localLastName,
    age: localAge,
} = profile;

console.log(localFirstName);
console.log(localLastName);
console.log(localAge);

// Destrucuturing dalam parameter fungsi
function printProfile({ firstName, lastName, age }) {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
}

printProfile(profile);

// Contoh neested object
//const profile1 = {
//    name: {
//        firstName: "Roger",
//        lastName: "Danuarta",
//    },
//    age: 18,
//    address: {
//        city: "New York",
//        zip: "10001"
//    }
//};
//
//// Destructuring nested objects
//const {
//    name: { firstName, lastName },
//    address: { city, zip },
//    age
//} = profile1;
//
//console.log(firstName);
//console.log(lastName);
//console.log(city);
//console.log(zip);
//console.log(age);

// Array of Objects
const profiles = [
    { firstName: "John", lastName: "Doe", age: 18 },
    { firstName: "Jane", lastName: "Smith", age: 22 },
    { firstName: "Jack", lastName: "Johnson", age: 30 },
];

// Destructuring array of objects
const [firstProfile, , thirdProfile] = profiles;

console.log(firstProfile.firstName);
console.log(thirdProfile.age);

// Rest parameter
//const profile2 = {
//    firstName: "John",
//    lastName: "Doe",
//    age: 18,
//    city: "New York",
//    country: "USA"
//};
//
//// Destructuring dengan rest parameter
//const { firstName, lastName, ...rest } = profile2;
//
//console.log(firstName);
//console.log(lastName);
//console.log(rest);

// Fungsi return value
//function getProfile() {
//    return {
//        firstName: "John",
//        lastName: "Doe",
//        age: 18,
//    };
//}
//
//// Destructuring return value dari fungsi
//const { firstName, lastName, age } = getProfile();
//
//console.log(firstName);
//console.log(lastName);
//console.log(age);

const profile3 = {
    name: {
        firstName: "John",
        // lastName tidak ada
    },
    age: 18,
};

// Destructuring nested objects dengan nilai default
const {
    name: { firstName, lastName = "Unknown" },
    age,
} = profile3;

console.log(firstName); // Output: John
console.log(lastName); // Output: Unknown
console.log(age); // Output: 18
