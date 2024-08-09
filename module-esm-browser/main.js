import { pi, add, multiply } from "./utils/math.js";

import greet, { farewell } from "./utils/greet.js";

console.log(`Value of pi: ${pi}`);
console.log(`2 + 3 = ${add(2, 3)}`);
console.log(`4 * 5 = ${multiply(4, 5)}`);

greet("Alice");
farewell("Alice");
