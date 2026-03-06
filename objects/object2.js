const obj={
    name:"Abhishek",
    age:22,
}

obj.name="aakash";
console.log(obj);

// here we can change the value and delete the value of object 
// because after changing the value also the addrress of object remains the same 
// just the object where this is in heap a new key is added 


// obj={};        // this gives errror

// delete obj.name;  // delete the property of object 
// console.log(obj);


// this don't allow to add any new property and delete property in object 
// but can modify the existing property 

// Object.seal(obj);

// obj.name="Rahul";
// console.log(obj);

// complty frezz the object 
// It completely locks the object.
Object.freeze(obj);


obj.name="Rahul";
console.log(obj);

// use of in keyword 
console.log("name" in obj);



