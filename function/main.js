// Fungsi sederhana yang tidak menerima parameter dan tidak mengembalikan nilai
function greeting() {
    console.log("Selamat Malam!");
}

// Memanggil fungsi greeting
greeting();

// Fungsi dengan parameter untuk menerima input dan mengubah perilaku fungsinya
function greeting1(name, language) {
    if (language == "English") {
        console.log(`Good Morning ${name}!`);
    } else if (language == "French") {
        console.log(`Bonjour ${name}!`);
    } else {
        console.log(`Selamat Pagi ${name}!`);
    }
}

// Memanggil function greeting1 dengan argumen
greeting1("Roger", "French");

// Fungsi yang mengembalikan nilai
function multiply(a, b) {
    return a + b;
}

// Menyimpan nilai pengembalian fungsi multiply ke dalam variabel dan mencetaknya
let result = multiply(10, 2);
console.log(result);

// Fungsi greeting2 yang mengembalikan nilai string
function greeting2(name, language) {
    if (language == "English") {
        return `Good Morning ${name}!`;
    } else if (language == "French") {
        return `Bonjour ${name}!`;
    } else {
        return `Selamat Pagi ${name}!`;
    }
}

// Menyimpan hasil pengembalian function greeting2 ke dalam variabel dan mencetaknya
let greetingMessage = greeting2("Danuarta", "English");
console.log(greetingMessage);

// Expression function atau anonymous function yang disimpan dalam variabel
const greeting3 = function(name, language) {
    if (language == "English") {
        return "Good Morning " + name + "!";
    } else if (language == "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
};

// Memanggil expression function dan menceta hasilnya
console.log(greeting3("Ron", "English"));
