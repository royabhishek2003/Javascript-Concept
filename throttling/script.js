const inputElement= document.querySelector("input");
const span= document.querySelector("span");

function callApi(e){
    console.log("Api called with value: ", e.target.value);
}

const textcount= function(...args){
    span.innerText = ++span.innerText || 1;
}

inputElement.addEventListener("input", throttle(callApi, 1000));
document.addEventListener("mousemove", throttle(textcount));

// call the api only once in every 1 second even if the user is typing/mousemove continuously
function throttle(func, delay=500){
    let timerid= null;
    let firstcall= true;

    return function(...args){

        if(firstcall){
            func(...args); // call the original function with the provided arguments
            firstcall= false;
            return;
        }

        if(timerid) return; // if timer is already set, do nothing

        // call the function immediately and set the timer
        timerid= setTimeout(()=>{
            func(...args); // call the original function with the provided arguments
            timerid= null; // reset the timer after the function is called
        }, delay)
    }
}
