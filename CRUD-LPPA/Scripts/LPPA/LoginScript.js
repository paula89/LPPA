const { localstorage } = require("modernizr");


async function login(userName, password) {
    let response = await fetch('http://localhost:8000/login',{
        method: 'POST', 
        body: '{{user:"'+userName+'",password:"'+password+'"}}'
    })
    let returnedData = response.json();

    if (returnedData["key"] == '0' ){
        alert("Hubo un error pibe")
        return false
    }
    else{
        localStorage.setItem("token",returnedData["key"])
        localStorage.setItem("timeStamp", returnedData["timestamp"])
        localStorage.setItem("privileges", returnedData["permisos"]["codigo"])
        return true
    }

}


function logout() {
    localStorage.clear()
    location.replace('Index.aspx')
}


