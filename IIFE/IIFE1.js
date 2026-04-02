
// 1 
(function (){
    const x=5;
    console.log(x);
})();

// x is not global

// 2 using Arrow function 
(() => {
    console.log("IIFE with arrow function");
})();