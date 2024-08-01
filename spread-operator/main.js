// Menyebarkan elemen array 
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

console.log(favorites);
console.log(...favorites); // spread operator


// Jika tidak menggunakan spread operator
//const allFavorites = [favorites, others];
//console.log(allFavorites);


// Menggabungkan dua array 
const allFavorites = [...favorites, ...others];
console.log(allFavorites);


// Menyalin array 
const copyFavorites = [...favorites];
console.log(copyFavorites);


// Menambahkan elemen baru ke array 
const newFavorites = ["Pizza", ...favorites, "Burger"];
console.log(newFavorites);


// Menggabungkan beberapa object  
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };
console.log(newObj);


// Menyalin object 
const copyObj = { ...obj1 };
console.log(copyObj);


// Menambahkan dan mengupdate properti dalam object 
const updateObj = { ...obj1, age: 35, lastName: 'Kenobi' };
console.log(updateObj);

console.log(obj1);

// Notes : Spread operator itu tidak mengubah objek asli tapi membuat objek baru 
