let localURL =  'http://localhost:8000/user'

async function retrieveAll() {
    let response = await fetch(localURL,{
        headers: '{{key:"'+localStorage.getItem("key")+'"}}'
        
    })
    let returnedData = response.json();

    var x = document.getElementById("usersTable")


    let dData = '{"usuario1":{ "id": "1", "nombre": "juan" },"usuario2":{ "id": "2", "nombre": "pedro" }}'

    let a = JSON.parse(dData)

    console.log(a)


    for (obj in a) {
        let i = 0
        var row = document.createElement("tr")
        console.log(a[obj])
        for (let key in a[obj]) {
            var cell = document.createElement("td")
            console.log(key)
            cell.innerHTML = a[obj][key]
            row.append(cell)
        }
        var cell = document.createElement("td")
        var botonM = document.createElement("input")
        var botonD = document.createElement("input")
        var div = document.createElement("div")
        botonM.classList.add("btn", "btn-outline-success")
        botonD.classList.add("btn", "btn-outline-danger")
        botonM.type = "button"
        botonD.type = "button"
        botonM.innerHTML = "M"
        botonD.innerHTML = "D"
        botonM.addEventListener("click", function (e) { location.replace('manageUsersForm.aspx?user=' + document.getElementById('userTitle').innerHTML + '&userID=' + getID(e)) })
        botonD.addEventListener("click", confirmameDelete)
        div.class = "btn-group"
        div.role = "group"
        div.append(botonM)
        div.append(botonD)
        cell.append(div)
        row.append(cell)
        x.append(row)
    }

}

async function retrieveOne(userID) {
    let response = await fetch(localURL+"/"+userID,{
        headers: '{{key:"'+localStorage.getItem("key")+'"}}'
        
    })
    let returnedData = response.json();
    //checkeo despues if lo de abajo
    let i = 0
    let campos = ["usrID", "nombre", "apellido", "email", "direccion","privilegios"]
    document.getElementById('id').value = "asd"
    for (obj in returnedData) {

        document.getElementById(campos[i]).value = returnedData[obj]
        i++
    }
}

async function createUser(userID,userdata) {
    let response = await fetch(localURL + "/" +userID,{
        method: 'POST', //aclaro para que quede ordenado
        headers: '{{key:"'+localStorage.getItem("key")+'"}}',
        body: userdata // a definir
    })
    let returnedData = response.json();
}

async function modifyUser(userID, userdata) {
    let response = await fetch(localURL + "/" +userID,{
        method: 'PUT', //aclaro para que quede ordenado
        headers: '{{key:"'+localStorage.getItem("key")+'"}}',
        body: userdata // a definir
    })
    let returnedData = response.json();
}

async function deleteUser(userID) {
    let response = await fetch(localURL + "/" +userID,{
        method: 'DELETE', //aclaro para que quede ordenado
        headers: '{{key:"'+localStorage.getItem("key")+'"}}',
    })
    let returnedData = response.json();
}


//Habilita los botones
function enableAccess() {
    let max = 2;
    //let x = Array.from(localStorage.getItem('privileges'))
    //for (char in x) {
    //    if (char > max) {
    //        max = char;
    //    } 
    //}

    switch (max) {
        case 0:

            document.getElementById('Admin').hidden = true
            document.getElementById('SuperAdmin').hidden = true
            break;
        case 2:
            document.getElementById('User').hidden = true
            document.getElementById('SuperAdmin').hidden = true
            break;
        case 3:
            document.getElementById('Admin').hidden = true
            document.getElementById('User').hidden = true
            break;
    }
}


//test sin backend de retrieveall
function TestTable() {

    var x = document.getElementById("usersTable")


    let dData = '{"usuario1":{ "id": "1", "nombre": "juan" },"usuario2":{ "id": "2", "nombre": "pedro" }}'

    let a = JSON.parse(dData)

    console.log(a)


    for (obj in a) {
        let i = 0
        var row = document.createElement("tr")
        console.log(a[obj])
        //var row = x.insertRow(i-1)
        for (let key in a[obj]) {
            var cell = document.createElement("td")
            console.log(key)
            //var cell = row.insertCell(i)
            cell.innerHTML = a[obj][key]
            //i++
            row.append(cell)
        }
        var cell = document.createElement("td")
        var botonM = document.createElement("input")
        var botonD = document.createElement("input")
        var div = document.createElement("div")
        botonM.classList.add("btn", "btn-outline-success")
        botonD.classList.add("btn", "btn-outline-danger")
        botonM.type = "button"
        botonD.type = "button"
        botonM.innerHTML = "M"
        botonD.innerHTML = "D"
        botonM.addEventListener("click", function (e) { location.replace('manageUsersForm.aspx?user=' + document.getElementById('userTitle').innerHTML + '&userID=' + getID(e)) })
        botonD.addEventListener("click", confirmameDelete)
        div.class = "btn-group"
        div.role = "group"
        div.append(botonM)
        div.append(botonD)
        cell.append(div)
        row.append(cell)
        x.append(row)
    }


}

//me trae el id de la primera row
function getID(e) {
    console.log(e.target)
    var row1 = e.target.closest("tr")

    return row1.cells[0].innerHTML
}


//confirmacionDelete
function confirmameDelete(e) {
    Swal.fire({
        title: 'Estas seguro que quiere eliminar al usuario?',
        text: "Esto no es revertible!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '##38d39f',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Borrar!'
    }).then((result) => {
        if (result.isConfirmed) {

            //deleteUser(localStorage.getItem("token"), getID())
            Swal.fire(
                'Borrado!',
            )

        }
    })
}

//genero jason y llamo segun un valor
function AltaModif(ID,name, last, email, dir, priv, psw,accion){

    let x = '{"usuario":' + name + ',"apellido":' + last + ',"email":' + email + '"direccion":' + dir + ',"permisos":' + priv + ',"password":' + psw + '}'

    if (accion == 1) {
        createUser(ID, x)
    }
    else {
        modifyUser(ID, x)
    }
}