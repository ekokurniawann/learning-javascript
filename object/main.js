// Membuat object kosong 
const user1 = {};
console.log(user1);

/*
 Object terdiri dari pasangan key-value yang dikenal sebagai properti. Key bertindak seperti nama variabel yang menyimpan sebuah nilai, sedangkan value bisa berupa nilai dari tipe data apa pun, termasuk objek lain. Key harus berupa string dan diikuti oleh titik dua (:) serta nilai value-nya.
 let object = {
  key1: "value1",
  key2: "value2",
  key3: "value3"
};
 */

// Contoh membuat object (Literal object)
const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine",
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

// Mengakses properti object : Untuk mengakses nilai dari properti object, kita dapat menggunakan dot operator (.) atau bracket notation ([]).
// Dot operator 
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(user.getFullName());
console.log(`Umur saya ${user.age} tahun`)

// Bracket Notation digunakan ketika key memiliki spasi atau karakter khusus lainnya.
console.log(`Saya berasal dari ${user["home world"]}`);

const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

// Mengubah nilai properti
spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;

// Menambahka properti baru 
spaceship.class = "Light freighter";

// Menghapus properti object
delete spaceship.manufacturer;

console.log(spaceship);

// Membuat object constructor 
const user2 = new Object();
user2.firstName = "Jane";
user2.lastName = "Smith";
user2.age = 30;

console.log(user2.firstName)


//// Fungsi konstruktor (ES5)
//function User(firstName, lastName, age) {
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.age = age;
//}
//
//User.prototype.getFullName = function() {
//    return `${this.firstName} ${this.lastName}`;
//};
//
//const user3 = new User("Bob", "Brown", 32);
//console.log(user3.getFullName()); // Output: Bob Brown


// Class Syntax : menggunakan sintaks ES6 untuk mendefinisikan objek dan metode
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const user4 = new User("Roger", "Danuarta", 32);
console.log(user4.getFullName());


// Method Object.create() : digunakan untuk membuat object baru dengan object yang ada sebagai prototipe
const person = {
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};

const john = Object.create(person);
john.name = "John";
console.log(john.greet());


// Factory functions 
function createUser(firstName, lastName, age) {
    return {
        firstName,
        lastName,
        age,
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    };

}

const user5 = createUser("Alice", "Smith", 30);
console.log(user5.getFullName());


// Object destructuring : untuk mengambil properti dari object
const user6 = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 28
};

const { firstName, lastName } = user6;
console.log(firstName);
console.log(lastName);


// Object spread and rest : Mnggunakan spread operator (...) untuk menyalin dan menggabungkan object
const user7 = {
    firstName: "Alice",
    lastName: "Gusion",
    age: 29
};

const userWithLocation = {
    ...user7,
    location: "New York"
};

console.log(userWithLocation);


// Property shorthand : Menulis properti objek dengan nama variabel yang sama menggunakan shorthand
const firstName1 = "Alice";
const lastName1 = "Alucard";

const user8 = { firstName1, lastName1, age: 28 };
console.log(user8);


// Computed property names : mengunkana nama properti yaang dinamis dalam objek 
const key = "email";
const user9 = {
    [key]: "zilong@gmail.com"
};

console.log(user9.email);
