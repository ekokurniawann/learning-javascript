// WeakMap
const weakMap = new WeakMap();

let obj = { name: "Roger" };

// Menyimpan objek ke dala weakMap
weakMap.set(obj, "Ini adalah data roger");

console.log(weakMap.get(obj));

// Menghapus referensi objek
obj = null;

// Delay untuk menunggu garbage collector bekerja
setTimeout(function () {
  console.log(weakMap.has(obj)); // false , objek telah dihapus
}, 10000);

// WeakMap untuk melacak kunjungan user
const userVisits = new WeakMap();

function trackVisit(user) {
  let count = userVisits.get(user) || 0;
  userVisits.set(user, count + 1);
}

let user1 = { name: "Alice" };
let user2 = { name: "Bob" };

trackVisit(user1);
trackVisit(user2);
trackVisit(user1);

console.log(userVisits.get(user1));
console.log(userVisits.get(user2));

// Menghapus referensi user1
user1 = null;

// Delay untuk menunggu garbage collector bekerja
setTimeout(function () {
  console.log(userVisits.has(user1));
}, 10000);

// WeakMap untuk menyimpan metadata objek
const metadataMap = new WeakMap();

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    metadataMap.set(this, { serviced: false });
  }

  service() {
    const metadata = metadataMap.get(this);
    if (metadata) {
      metadata.serviced = true;
    }
  }

  isServiced() {
    const metadata = metadataMap.get(this);
    return metadata ? metadata.serviced : false;
  }
}

let car1 = new Car("Toyota", "Corola");
let car2 = new Car("Honda", "Civic");

console.log(car1.isServiced());
car1.service();
console.log(car1.isServiced());

// Menghapus referensi car1
car1 = null;

// Delay untuk menunggu garbage collector bekerja
setTimeout(function () {
  console.log(metadataMap.has(car1));
}, 10000);
