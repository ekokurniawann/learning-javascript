// Deklarasi dan inisialisasi set
const numberSet = new Set([1, 4, 6, 4, 1]);
console.log(numberSet);

// Operasi dasar pada set
// Menambahkan elemen ke dalam set
const numberSet1 = new Set([1, 4, 6, 4, 1]);
numberSet1.add(5);
numberSet1.add(10);
numberSet1.add(6);
console.log(numberSet1);

// Menghapus elemen dari set
const numberSet2 = new Set([1, 4, 6, 4, 1]);
numberSet2.add(5);
numberSet2.add(10);
numberSet2.delete(4);
console.log(numberSet2);

// Memeriksa keberadaan elemen dalam set
const numberSet3 = new Set([1, 4, 6]);
console.log(numberSet3.has(4));
console.log(numberSet3.has(10));

// Menghitung jumlah dalam set
const numberSet4 = new Set([1, 4, 6]);
console.log(numberSet4.size);

// Menghapus semua elemen dari set
const numberSet5 = new Set([1, 4, 6]);
numberSet5.clear();
console.log(numberSet5.size);

// Iterasi pada set
const numberSet6 = new Set([1, 4, 6]);
for (const value of numberSet6) {
    console.log(value);
}

numberSet6.forEach((value) => {
    console.log(value);
});

// Menghapus duplikat dari array
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);

// Operasi gabungan
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
const union = new Set([...setA, ...setB]);
console.log(union);

// Operasi irisan
const setA1 = new Set([1, 2, 3]);
const setB1 = new Set([3, 4, 5]);
const intersection = new Set([...setA1].filter((x) => setB1.has(x)));
console.log(intersection);

// Operasi perbedaan
const setA2 = new Set([1, 2, 3]);
const setB2 = new Set([3, 4, 5]);
const differencee = new Set([...setA2].filter((x) => !setB2.has(x)));
console.log(differencee);
