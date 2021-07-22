function TestTables(type) {
    $("#rowContent tr").remove();
    var x = document.getElementById("rowContent")


    let dData = '{"usuario1":{ "id": "1", "nombre": "juAan", "apellido": "flori", "email": "jflori@direccionn", "direccion":"BS As", "PRIVILEGIOS":"1234"}, "usuario2": { "id": "2", "nombre": "pedro", "apellido": "flori", "email": "jflori@direccionn", "direccion":"BS As", "PRIVILEGIOS":"1234"}}'

    let a = JSON.parse(dData)

    //console.log(a)


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
        if (type == true) {
            var cell = document.createElement("td")
            var botonM = document.createElement("input")
            var botonD = document.createElement("input")
            var div = document.createElement("div")
            botonM.classList.add("btn", "btn-outline-warning")
            botonD.classList.add("btn", "btn-outline-danger")
            botonM.type = "button"
            botonD.type = "button"
            botonM.value = "M"
            botonD.value = "D"
            botonM.addEventListener("click", function (e) { location.replace('manageUsersForm.aspx?user=' + document.getElementById('userTitle').innerHTML + '&userID=' + getID(e)) })
            botonD.addEventListener("click", function () { confirmame(type)})
            div.class = "btn-group"
            div.role = "group"
            div.append(botonM)
            div.append(botonD)
            cell.append(div)
            row.append(cell)
        }
        x.append(row)
    }

    

   
    
}

function getID(e) {
    console.log(e.target)
    var row1 = e.target.closest("tr")

     return row1.cells[0].innerHTML
}

function confirmame(type){
    Swal.fire({
        title: 'Estas seguro que quiere eliminar al usuario?',
        text: "Esto no es revertible!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#38d39f',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Borrar!'
    }).then((result) => {
        if (result.isConfirmed) {
            
             //deleteUser(localStorage.getItem("token"), getID())
            Swal.fire(
                'Borrado!',

            ).then((result) => {
                if (result.isConfirmed) {
                    console.log(type)
                    TestTables(type)
                }
            })
                
        }
    })
}
//cell.innerHTML = '<input type="button" class="btn btn - warning" value="Nuevo Usuario"  onclick="location.replace("addUserForm.aspx?user=" + document.getElementById("userTitle").innerHTML); return false;">'
//var boton = document.createElement("input")
//boton.