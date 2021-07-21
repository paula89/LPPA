


async function loginRequest(userName, password) {
    let response = await fetch('http://localhost:8000/login',{
        method: 'POST', 
        body: '{{user:"'+userName+'",password:"'+password+'"}}'
    })
    let returnedData = response.json();

    if (returnedData["key"] == '0' ){
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




const inputs = document.querySelectorAll(".input");


function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}


inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});

function validateInputs(usuario, password) {

    if ((usuario || password === '' ? false : true)) {
        if (usuario.lenght || password.lenght <= 20 ? false : true) {
            return loginRequest(usuario, password)
        }
        else {
            return false
        }
    }
    else {
        return false
    }
}

function login() {
    let usuario = document.getElementById('usuario').value;
    let password = document.getElementById('password').value;
    console.log(usuario + password)
    //let response = validateInputs(usuario, password)
    let response = true

    if (response) {
        location.replace("Default.aspx?user="+usuario )
        
    }
    else {
        Swal.fire('Mensaje de User/Psw erroneo')
    }
}

