
let myname="anurag";
const user1={
    firstName:"Abhishek",
    lastName:"roy",
    anurag: "Developer"
}

const user2={
    firstName:"Akash",
    'last-Name':"singh" // if you want to make name using any other character 

}

// method of access property of object 
// behind the scene js also store key in string 

console.log(user2.firstName);
console.log(user1["firstName"]);
console.log(user2["last-Name"]); // dot notation gives error 
console.log(user1.anurag);
console.log(user1[myname]); // if you want to access the value by using the variable not directly in the object 
console.log(user2["first"+"Name"]);