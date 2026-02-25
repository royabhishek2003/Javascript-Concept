

// function test() {
//   if (true) {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//   }

//   console.log(a); // ✅ 10
// //   console.log(b); // ❌ Error
// //   console.log(c); // ❌ Error
// }

// test();


// redclaration 

// var x = 10;
// var x = 20;   // ✅ allowed

// let y = 10;
// let y = 20;   // ❌ Error

// const z = 10;
// const z = 20; // ❌ Error


// 3. Reassignment
// let a = 10;
// a = 20;   // ✅ allowed

// const b = 10;
// b = 20;   // ❌ Error


// 4. Hoisting (Interview Favorite)

// All three are hoisted, BUT behave differently.

// With var
console.log(a); // undefined
var a = 10;

// It prints undefined.

// With let and const
// console.log(b); // ❌ ReferenceError
// let b = 10;

// Why?
// Because of Temporal Dead Zone (TDZ).

// 👉 They are hoisted but not initialized.



// 5. Const with Objects (Tricky Part)
// const obj = { name: "Abhi" }; 

// obj.name = "Roy";   // ✅ allowed
// obj = {};           // ❌ not allowed

// Important:

// 👉 const prevents reassignment
// 👉 It does NOT make object immutable

// This is a common confusion.



// 🚀 Quick Interview Table
// Feature	var	let	const
// Scope	Function	Block	Block
// Redeclare	✅ Yes	❌ No	❌ No
// Reassign	✅ Yes	✅ Yes	❌ No
// Hoisted	Yes (undefined)	Yes (TDZ)	Yes (TDZ)

// only _ and $ special characters are used in naming 