// Push 

// let arr = [1,2,3];
// arr.push(4);
// console.log(arr); // [1,2,3,4]

//2. pop()
// Removes the last element of the array.

// let arr = [1,2,3];
// arr.pop();
// console.log(arr); // [1,2]

// 3. shift()
// Removes the first element of the array.

// let arr = [1,2,3];
// arr.shift();
// console.log(arr); // [2,3]

// 4. unshift()
// Adds an element at the beginning.
// let arr=[1,2,3];
// arr.unshift(5);
// console.log(arr);

// 5.Map
// Creates a new array by transforming each element.

// let arr = [1,2,3];
// let result = arr.map(x => x * 2);

// console.log(result); // [2,4,6]

// 6. filter()
// Returns elements that satisfy a condition.

// let arr = [1,2,3,4];
// let even = arr.filter(x => x % 2 === 0);

// console.log(even); // [2,4]

// 7.reduce 
// reduce the array to a single value 

// let arr=[1,2,3,5];

// let sum= arr.reduce((acc,val)=>{ return  acc+val /* returning the next accumulator */ },0);
// console.log(sum);

// 8. find()
// Returns the first element that satisfies a condition.

// let arr=[2,3,4,5,6,7,8];
// let x= arr.find((ele)=>{
//     if(ele==7)
//     return ele;
// });

// console.log(x);

// 9. includes()
// Checks if an element exists in the array.

// let arr=[1,2,3,4,5,6,7];

// if(arr.includes(7)){
//     console.log("7 is present in arr")
// }
// else{
//     console.log("not present");
// }


// 10. slice()
// Returns a portion of the array (does not modify original array).


// let arr=[1,2,3,4,5,6,7,8];

// let arr2=arr.slice(1,4); // starting idx to lastidx+1
// console.log(arr2);

// 11.splice()
// Used to add/remove elements (modifies original array).
// arr.splice(idx, number of ele to deleted, item1, item2);

// let arr=[1,2,3,4,5,6,7,8];
// let arr2=arr.splice(2,3,10,11);
// console.log(arr); // [1,2,10,11,6,7,8]
// console.log(arr2); // [3,4,5]

// 12.sort 
// Sorts the array.
// JavaScript sorts elements as strings by default.

// let arr = [10, 2, 5, 1];
// arr.sort();

// console.log(arr); // [1,10,2,5]

// correct Numeric sorting

// let arr=[10,34,23,67,1,23];

// arr.sort((a,b)=>a-b);
// console.log(arr);







