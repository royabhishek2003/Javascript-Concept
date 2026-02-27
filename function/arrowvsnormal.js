// normal function 
// const obj = {
//   name: "Abhishek",
//   sayHi: function () {
//     console.log(this);
//   }
// };

// obj.sayHi(); // print whole obj 


// arrow function 

// const obj = {
//   name: "Abhishek",
//   arrow: () => {
//     console.log(this);
//   }
// };

// obj.arrow();  // print window because it copied this from its parent which is window here 


// const obj = {
//   name: "Abhishek",
//   method: function () {
//     const arrow = () => {
//       console.log(this);
//     };
//     arrow();
//   }
// };

// obj.method();  // print obj parent of arrow function ka this copy karega jo ki obj hi hai 


// function test() {
//   const arrow = () => console.log(this);
//   arrow();
// }

// test();  // print window 


// normal function 

// function test(){
//     console.log(arguments); // argument object automatically created by jsvascript 
// }

// test(1,2,4,5,6,7,4);  output[Arguments] { '0': 1, '1':2, '2': 4, '3': 5, '4': 6,'5': 7, '6': 4 }

// Arrow functions do NOT have their own arguments object.

const test = () => {
  console.log(arguments);
};

test(1, 2, 3);  // error we have to use ...args 

