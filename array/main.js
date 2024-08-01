// Menginisialisasi array dengan berbagai tipe data
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];

// Menampilkan seluruh isi array
console.log(myArray);

// Mengakses elemen pada indeks ke-1 (elemen kedua)
console.log(myArray[1]);

// Mengakses elemen pada indeks ke-5 (tidak ada)
console.log(myArray[5]);

// Menampilkan panjang array
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

// Menambahkan elemen 'JavaScript' di akhir array
myArray.push('JavaScript'); // Menambahkan 'JavaScript' di akhir array
console.log(myArray);

// Menghapus elemen terakhir
myArray.pop(); // Menghapus elemen terakhir dari array
console.log(myArray);

// Menghapus elemen pertama
myArray.shift(); // Menghapus elemen pertama dari array
console.log(myArray);


// Menambahkan elemen 'Apple' di awal array
myArray.unshift("Apple"); // Menambahkan 'Apple' di awal array
console.log(myArray);


// Menghapus elemen pada indeks ke-1
delete myArray[1]; // Menghapus elemen pada indeks ke-1
console.log(myArray); // Menghapus 1 elemen mulai dari indeks ke-2


myArray.splice(2, 1); // Menghapus elemen pada indeks ke-2, yaitu elemen '22'
console.log(myArray);


// Menambahkan elemen 'February' pada indeks ke-1 tanpa menghapus elemen apapun
const month = ['January', 'March', 'April', 'May'];
console.log('before splice: ', month);

month.splice(1, 0, 'February'); // Menambahkan 'February' pada indeks ke-1
console.log('after splice: ', month); 
