

async function login(userName, password) {
    let response = await fetch('http://localhost:8000/login',{
        method: 'POST', 
        body: '{{user:"'+userName+'",password:"'+password+'"}}'
    })
    let returnedData = response.json();

    if (returnedData["key"] == '0' ){
        alert("Hubo un error pibe")
    }
    else{
        localStorage.setItem("token",returnedData["key"])
        localStorage.setItem("timeStamp",returnedData["timestamp"])
    }




}


