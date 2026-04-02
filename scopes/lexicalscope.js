'use strict'


const username="Abhishek";
function subtract (){
    const x= 15;
    const y= 18;
    const z= 28;

    console.log(y-x);
    console.log(username);

    function child(){
        num2=16;// we can prevent it by using strictmode 
        const childname="golu";
        console.log(childname);
        console.log(z);
    }
    child();
}

subtract();
console.log(num2);





// lexical scope of child = chilsscope + subtractscope + gloalscope
// here child function cretaes a closure inside that variable z is tored 

// var functional scope and let,const block scope 

