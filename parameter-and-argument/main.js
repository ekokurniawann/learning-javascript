// Function untuk mengonversi suhu dari Celsius ke Fahrenheit
function convertCelsiusToFahrenheit(temperature) {
    const temperatureInFahrenheit = (9 / 5) * temperature + 32;
    console.log("Hasil konversi:", temperatureInFahrenheit);
}

// Contoh penggunaan parameter dan argument
const temperatureInCelsius = 90;
convertCelsiusToFahrenheit(temperatureInCelsius); // Argument berupa variabel
convertCelsiusToFahrenheit(100); // Argument berupa nilai langsung

// Function dengan beberapa parameter
function add(a, b) {
    return a + b;
}

// Contoh penggunaan function dengan beberapa parameter
console.log(add(5, 3));

// Function dengan default parameter
function greet(name = "Stranger") {
    console.log("Hello, " + name + "!");
}

// Contoh penggunaan default parameter
greet();
greet("Alice");

// Function dengan argument yang tidak diberikan nilai
function convertCelsiusToFahrenheitWithDefault(temperature = 50) {
    const temperatureInFahrenheit = (9 / 5) * temperature + 32;
    console.log("Hasil konversi:", temperatureInFahrenheit);
}

// Contoh penggunaan function dengan default parameter
convertCelsiusToFahrenheitWithDefault();
convertCelsiusToFahrenheitWithDefault(90);

// Function dengan conditional statement untuk menangani undefined argument
function convertCelsiusToFahrenheitConditional(temperature) {
    if (temperature !== undefined) {
        const temperatureInFahrenheit = (9 / 5) * temperature + 32;
        console.log("Hasil konversi:", temperatureInFahrenheit);
    } else {
        console.log("Temperature is undefined.");
    }
}

// Contoh penggunaan function dengan conditional statement
convertCelsiusToFahrenheitConditional();
convertCelsiusToFahrenheitConditional(90);

// Function dengan parameter lebih dari satu
function calculateArea(length, width) {
    return length * width;
}

// Contoh penggunaan function dengan lebih dari satu parameter
console.log(calculateArea(5, 10));

// Function dengan parameter dan penggunaan variabel di dalamnya
function concatenateStrings(str1, str2) {
    return str1 + " " + str2;
}

// Contoh penggunaan function dengan parameter string
console.log(concatenateStrings("Hello", "World"));

// Function dengan default parameter dan argument variabel
function calculateDiscount(price, discount = 0.1) {
    return price - price * discount;
}

// Contoh penggunaan function dengan default parameter dan argument variabel
const price = 100;
console.log(calculateDiscount(price));
console.log(calculateDiscount(price, 0.2));
