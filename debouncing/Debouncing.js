const input = document.querySelector("input");


function debounce(func, delay){
    let timeoutId;

    // return a new function that will be called after certain delay when the event occurs
    return function(...args){
        // clear the previous timeout if it exists
        if(timeoutId){
            clearTimeout(timeoutId);
        } 
        // call the function after the specified delay
        timeoutId = setTimeout(()=> func(...args), delay);

    }
}

function callApi(e){
    console.log("Api called with value: ", e.target.value);
}
input.addEventListener("input", debounce(callApi, 500));