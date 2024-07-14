//primitive
//7

// Number
let num = 42;

// String
let str = "Hello, world!";

// Boolean
let bool = true;

// Null
let emptyValue = null;

// Undefined
let notDefined;

// Symbol
let sym = Symbol("unique");

// BigInt
let bigInt = 1234567890123456789012345678901234567890n;

console.log(typeof num);        // Outputs: "number"
console.log(typeof str);        // Outputs: "string"
console.log(typeof bool);       // Outputs: "boolean"
console.log(typeof emptyValue); // Outputs: "object" (special case for null)
console.log(typeof notDefined); // Outputs: "undefined"
console.log(typeof sym);        // Outputs: "symbol"
console.log(typeof bigInt);     // Outputs: "bigint"

//Non-Primitive

let obj = {
    name: "Alice",
    age: 30
  };
  
  // Array
  let arr = [1, 2, 3, 4, 5];
  
  // Function
  function greet() {
    console.log("Hello, world!");
  }
  
  console.log(typeof obj);  // Outputs: "object"
  console.log(typeof arr);  // Outputs: "object" (arrays are a type of object)
  console.log(typeof greet); // Outputs: "function"
  
  // Using the non-primitive data types
  console.log(obj.name);   // Outputs: "Alice"
  console.log(arr[0]);     // Outputs: 1
  greet();                 // Outputs: "Hello, world!"