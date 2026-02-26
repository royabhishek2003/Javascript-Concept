// fetching api using post method 
async function sendData(){

    try{
        
        const res= await fetch("https://api.restful-api.dev/objects",{
            method:"POST",
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify({ 
                    "name": "Apple MacBook Pro 16",
                    "data": {
                        "year": 2019,
                        "price": 1849.99,
                        "CPU model": "Intel Core i9",
                        "Hard disk size": "1 TB"
                    }} )
        });

        console.log(res);

    }
    catch(error){
        console.log("Error is : ",error);
    }

}

sendData();