// shallow copy =,{ ...}

// deep copy 
// 1st method 


// let arr1 = [1, 2, { name: "Abhi" }];
// let arr2 = JSON.parse(JSON.stringify(arr1));
// arr2[2].name = "Roy";

// console.log(arr1[2].name); // Abhi ✅

// 2nd method 

// using unstructuredClone -> make a deep copy of entire data structure 

// let a={
//     b:{
//         c:"abc"
//     }
// }


// let b= structuredClone(a);
// b.b.c="def";
// console.log(a);


// 3rd method using recursive function 

// function deepcopy(value){
//     if(value===null  || typeof value !== "object"){
//         return value;
//     }

//     if(Array.isArray(value)){
//        const arr=  value.map((item)=>{
//             return deepcopy(item);
//         })
//         return arr;
//     }

//     let deep={};
//     for(let key in value){
//         deep[key] =  deepcopy(value[key]);
//     }
//     return deep;
// }

// let arr1= [1,2,3,{name:'Abhishek'}];

// let arr2= deepcopy(arr1);

// console.log(arr2);
// arr2[0]=2;
// console.log(arr1);
