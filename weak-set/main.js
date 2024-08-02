// WeakSet
const weakSet = new WeakSet();

let obj = { name: "Roger" };

// Menambahkan objek kedalam WeakSet
weakSet.add(obj);

console.log(weakSet.has(obj));

// Menghapus referensi obejek
obj = null;

// Delay untuk menunggu garbage collector bekerja
setTimeout(function() {
    console.log(weakSet.has(obj));
}, 10000);

//WeakSet untuk melacak user yang sudah login
const loggedInUsers = new WeakSet();

function loginUser(user) {
    loggedInUsers.add(user);
}

function isLoggedIn(user) {
    return loggedInUsers.has(user);
}

let user1 = { name: "Alice" };
let user2 = { name: "Roger" };

loginUser(user1);
loginUser(user2);

console.log(isLoggedIn(user1));
console.log(isLoggedIn(user2));

user1 = null;

setTimeout(function() {
    console.log(isLoggedIn(user1));
}, 10000);

// WeakSet untuk menyimpan instance singleton
class Singleton {
    constructor(name) {
        if (Singleton.instances.has(this)) {
            throw new Error("You can only create one instance of Singleton!");
        }
        this.name = name;
        Singleton.instances.add(this);
    }

    static instances = new WeakSet();
}

let instance1 = new Singleton("Instance 1");

try {
    new Singleton("Instance 2");
} catch (e) {
    console.error(e.message);
}

instance1 = null;

setTimeout(function() {
    try {
        let instance3 = new Singleton("Instance 3");
        console.log(instance3.name);
    } catch (e) {
        console.error(e.message);
    }
}, 10000);
