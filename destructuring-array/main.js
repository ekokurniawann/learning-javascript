const favorites = ["Seafod", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

// Destructuring dengan melewati elemen
//const [, , thirdFood] = favorites;
//
//console.log(thirdFood);

// Destructuring assignment
let myFood = "Ice Cream";
let herFood = "Noodles";

[myFood, herFood] = favorites;
console.log(myFood);
console.log(herFood);

// Menukar nilai variabel
let a = 1;
let b = 2;

console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

[a, b] = [b, a];

console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

// Nilai default
//const [myFood, herFood = "Salad"] = favorites;
//console.log(myFood);
//console.log(herFood);

// Nested Destructuring
const nestedArray = [1, [2, 3], 4];

const [first, [second, third], fourth] = nestedArray;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

// Destructuring dengan rest parameter
//const [firstFood, ...otherFoods] = favorites;
//console.log(firstFood);
//console.log(otherFoods);

// Destructuring dalam fungsi
function printFoods([firstFood, secondFood, thirdFood, fourthFood]) {
  console.log(firstFood);
  console.log(secondFood);
  console.log(thirdFood);
  console.log(fourthFood);
}

printFoods(favorites);

// Destructuring dengan fungsi return values
//function getFavorites() {
//  return ["Seafod", "Salad", "Nugget", "Soup"];
//}
//
//const [firstFood, secondFood, thirdFood, fourthFood] = getFavorites();
//console.log(firstFood);
//console.log(secondFood);
//console.log(thirdFood);
//console.log(fourthFood);

const data = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  genres: ["Novel", "Historical", "Drama"],
  ratings: {
    critics: 8.5,
    readers: 8.0,
  },
};

const {
  title,
  author,
  genres: [firstGenre, , thirdGenre],
  ratings: { critics: criticsRating, readers: readersRating },
} = data;

console.log(title);
console.log(author);
console.log(firstGenre);
console.log(thirdGenre);
console.log(criticsRating);
console.log(readersRating);
