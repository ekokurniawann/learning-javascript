// Mengimpor variabel dan fungsi dari file user.mjs menggunakan named import
import { name, email, age, getUserInfo } from "./user.mjs";

// Mengimpor fungsi greet dari file greeting.mjs menggunakan default import
import greet from "./greeting.mjs";

// Menggunakan variabel yang diimpor dari user.mjs
console.log(`User Name: ${name}`);
console.log(`User Email: ${email}`);
console.log(`User Age: ${age}`);

// Memanggil fungsi getUserInfo untuk menampilkan informasi lengkap pengguna
console.log(getUserInfo());

// Memanggil fungsi greet yang diimpor dari greeting.mjs
greet();
