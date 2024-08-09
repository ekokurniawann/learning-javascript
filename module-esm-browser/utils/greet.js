// Default export
export default function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Named export
export const farewell = (name) => {
  console.log(`Goodbye, ${name}!`);
};
