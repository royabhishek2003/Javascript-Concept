let a={
   name:"abhishek",
   age:23,
   roll:17
}

for(let item in a) console.log(item);// print the key in case of array print the index
for(let item of a) console.log(item); // error bacuse object is not iterable in case of array print value 
