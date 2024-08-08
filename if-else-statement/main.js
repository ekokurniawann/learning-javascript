// start -> isRaining -> true -> Persiapan sebelum berangkat kegiatan -> Hari ini hujan. Bawa payung -> Berangkat kegiatan
const isRaining = true;

console.log("Persiapan sebelum berangkat kegiatan.");

if (isRaining) {
    console.log("Hari ini hujan. Bawa payung");
}
console.log("Berangkat kegiatan.");

// start -> x -> false -> nilai kurang dari 70
let x = 50;

if (x > 70) {
    console.log("Nilai kurang dari 70");
} else {
    console.log("Nilai kurang dari 70");
}

// if - else if
let language = "French";
let greeting = "Selamat pagi";

if (language === "English") {
    greeting = "Good Morning!";
} else if (language === "French") {
    greeting = "Bonjour!";
} else if (language === "Japanese") {
    greeting = "Ohayou Gozaimasu!";
}

console.log(greeting);

// Ternary operator atau Conditional expressions
const isMember = false;
// sebelum tanda tanya ? berisi kondisi yang ingin kita evaluasi. Kemudian diikuti dengan expression apabila nilai kondisinya benar sebelum tanda titik dua. Terakhir adalah expression yang dieksekusi ketika kondisinya salah.
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`);

// Truthy & Falsy
/*
nilai yang dianggap falsy, antara lain:
Number 0
BigInt 0n
String kosong seperti “” atau ‘’
null
undefined
NaN, atau Not a Number
Selain contoh di atas maka nilainya adalah truthy dan ketika dievaluasi ke dalam if statement akan bernilai true
*/
let nameOne = "";

if (nameOne) {
    console.log(`Halo, ${nameOne}`);
} else {
    console.log("Nama masih kosong");
}

function checkGrades(grades) {
    for (let i = 0; i < grades.length; i++) {
        if (typeof grades[i] !== "number") {
            throw new Error("Invalid input. Please provide an array of numbers.");
        }

        const grade = grades[i];
        let predicate;

        if (grade >= 90) {
            predicate = "A";
        } else if (grade >= 80) {
            predicate = "B";
        } else if (grade >= 70) {
            predicate = "C";
        } else if (grade >= 60) {
            predicate = "D";
        } else {
            predicate = "E";
        }

        console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
    }
}

try {
    const studentGrades = [95, 85, 65, 80, 70];
    checkGrades(studentGrades);
} catch (e) {
    console.error(e);
}
