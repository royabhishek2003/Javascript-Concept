// 1️⃣ Function Declaration (Function Definition)
// function greet() {
//     console.log("Hello");
// }
// ✅ Key Features:

// Starts with function keyword

// Has a name

// Is hoisted completely

// Can be called before it appears in code

// Example:
// greet();   // ✅ Works

// function greet() {
//     console.log("Hello");
// }

// This works because JS hoists the entire function to the top.

// Internally JS treats it like:

// function greet() {
//     console.log("Hello");
// }

// greet();
// 🔹 2️⃣ Function Expression

// const greet = function() {
//     console.log("Hello");
// };
// ✅ Key Features:

// Function is assigned to a variable

// Not fully hoisted

// Cannot be used before definition

// Can be anonymous

// Example:
// greet();   // ❌ Error

// const greet = function() {
//     console.log("Hello");
// };

// Why error?

// Because only the variable is hoisted — not the function value.

// JS sees it like:

// const greet;  // hoisted but uninitialized

// greet();  // ❌ Cannot access before initialization