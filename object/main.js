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

// Contoh membuat object
const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine"
};

// Mengakses properti object : Untuk mengakses nilai dari properti object, kita dapat menggunakan dot operator (.) atau bracket notation ([]).
// Dot operator 
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
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
