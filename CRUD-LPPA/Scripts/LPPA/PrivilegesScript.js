
//function addRow(){
//    document.getElementById('list').innerHTML += 
//`
//    <ul>
//    <li data-label="nombre">
//        <input value="" />
//    </li>
//    <li data-label="descripcion">
//        <input value=""/>
//    </li>
//    <li data-label="accion">
//        <i class="fas fa-edit" onclick="document.getElementById('nameInput').removeAttribute('disabled')"></i>

//        <i class="far fa-check-circle" onclick="modificarPrivilegio() ? alert('Privilegio modificado con exito') : alert('Ha ocurrido un error')" ></i>

//        <i class="fas fa-trash-alt" onclick="return confirm('¿Desea eliminar el privilegio seleccionado?')"></i>
//    </li>
//  </ul>  
//`

//}

let localURLP = 'http://localhost:8000/privileges'

async function retrieveALL() {
    let response = await fetch(localURL, {
        headers: '{{key:"' + localStorage.getItem("key") + '"}}'

    })

    let returnedData = response.json();
}

function rellenameLista(returnedData) {

    $("#rowContent tr").remove();
    var x = document.getElementById("rowContent")

    for (obj in returnedData) {
        var row = document.createElement("tr")
        console.log(returnedData[obj])
        for (let key in returnedData[obj]) {
            var cell = document.createElement("td")
            var input = document.createElement("input")
            input.classList.add("form-control")
            input.type = "text"
            input.disabled = true
            console.log(key)
            input.value = a[obj][key]
            cell.append(input)
            row.append(cell)
        }

        x.append(actionButtons(1, row))
    }

    x.append(actionButtons(1, row))
}

async function createPrivilege(privilegeID, description) {
    let response = await fetch(localURLP + "/" + privilegeID, {
        method: 'POST', //aclaro para que quede ordenado
        headers: '{{key:"' + localStorage.getItem("key") + '"}}',
        body: description // a definir
    })
    let returnedData = response.json();
}

async function modifyPrivilege(privilegeID, description) {
    let response = await fetch(localURLP + "/" + privilegeID, {
        method: 'PUT', //aclaro para que quede ordenado
        headers: '{{key:"' + localStorage.getItem("key") + '"}}',
        body: description // a definir
    })
    let returnedData = response.json();
}

async function deletePrivilege(privilegeID) {
    let response = await fetch(localURLP + "/" + privilegeID, {
        method: 'DELETE', //aclaro para que quede ordenado
        headers: '{{key:"' + localStorage.getItem("key") + '"}}',
    })
    let returnedData = response.json();
}

function addRow() {
    var x = document.getElementById("rowContent")
    var row = document.createElement("tr")
    for (var i = 0; i < 2; i++) {
        var cell = document.createElement("td")
        var input = document.createElement("input")
        input.classList.add("form-control")
        input.type = "text"
        cell.append(input)
        row.append(cell)
    }
    
    x.append(actionButtons(2, row))

    document.getElementById('newRowBtn').disabled = true
}

function GenerateHardcodeRow() {
    $("#rowContent tr").remove();

    let dData = '{"permiso1":{ "id": "0", "descripcion": "Lectura"}, "permiso2": { "id": "1", "descripcion": "Create"}, "permiso3": { "id": "2", "descripcion": "Modify"}, "permiso4": { "id": "3", "descripcion": "Delete"}}'
    let a = JSON.parse(dData)

    var x = document.getElementById("rowContent")

    for (obj in a) {
        var row = document.createElement("tr")
        console.log(a[obj])
        for (let key in a[obj]) {
            var cell = document.createElement("td")
            var input = document.createElement("input")
            input.classList.add("form-control")
            input.type = "text"
            input.disabled = true
            console.log(key)
            input.value = a[obj][key]
            cell.append(input)
            row.append(cell)
        }

        x.append(actionButtons(1,row))
    }
}


function actionButtons(type, row1) {
    var cell = document.createElement("td")
    var botonC = document.createElement("input")
    var botonM = document.createElement("input")
    var botonD = document.createElement("input")
    var div = document.createElement("div")
    botonC.classList.add("btn", "btn-outline-success")
    botonM.classList.add("btn", "btn-outline-warning")
    botonD.classList.add("btn", "btn-outline-danger")
    botonC.type = "button"
    botonM.type = "button"
    botonD.type = "button"
    botonC.value = "Confirm"
    botonM.value = "M"
    botonD.value = "D"
    botonM.hidden = true
    if (type == 1) {
        botonC.hidden = true
        botonM.hidden = false
        botonM.addEventListener("click", function (e) { modificar(e) })
        botonD.addEventListener("click", function (e) { borrar(e) })
    }
    else if (type == 2) {
        botonD.addEventListener("click", function (e) { cancelarCreacion(e) })
        botonC.addEventListener("click", function (e) { confirmarCreacion(e) })
    }
    else {
        botonD.addEventListener("click", function (e) { cancelarModify(e) })
        botonC.addEventListener("click", function (e) { confirmarModify(e) })
    }
    //
    //
    div.class = "btn-group"
    div.role = "group"
    div.append(botonC)
    div.append(botonM)
    div.append(botonD)
    cell.append(div)
    row1.append(cell)

    return row1
}


function cancelarCreacion(e) {
    
    var Index = e.target.closest("tr").rowIndex

    document.getElementById("permTable").deleteRow(Index)

    document.getElementById('newRowBtn').disabled = false
}

function confirmarCreacion(e) {
    var row = e.target.closest("tr")

    var ID = row.cells[0].getElementsByTagName('input')[0].value
    var DESC = row.cells[1].getElementsByTagName('input')[0].value

    row.deleteCell(2)

    row.append(actionButtons(1, row).cells[2])

    //createPrivilege(ID,DESC)  creo privilegio

    row.cells[0].getElementsByTagName('input')[0].disabled = true
    row.cells[1].getElementsByTagName('input')[0].disabled = true

    document.getElementById('newRowBtn').disabled = false
}

function modificar(e) {

    var row = e.target.closest("tr")
    row.cells[0].getElementsByTagName('input')[0].disabled = false
    row.cells[1].getElementsByTagName('input')[0].disabled = false

    document.getElementById('newRowBtn').disabled = true

    row.deleteCell(2)

    row.append(actionButtons(3, row).cells[2])

}


function cancelarModify(e) {

    GenerateHardcodeRow()

    document.getElementById('newRowBtn').disabled = false
}


function confirmarModify(e) {
    var row = e.target.closest("tr")

    var ID = row.cells[0].getElementsByTagName('input')[0].value
    var DESC = row.cells[1].getElementsByTagName('input')[0].value

    row.deleteCell(2)

    row.append(actionButtons(1, row).cells[2])

    //modifyPrivilege(ID,DESC)  modifico privilegio

    row.cells[0].getElementsByTagName('input')[0].disabled = true
    row.cells[1].getElementsByTagName('input')[0].disabled = true

    document.getElementById('newRowBtn').disabled = false
}

function borrar(e) {
    var row = e.target.closest("tr")

    var ID = row.cells[0].getElementsByTagName('input')[0].value

    confirmame(ID)

}


function confirmame(ID) {
    Swal.fire({
        title: 'Estas seguro que quiere eliminar el permiso?',
        text: "Esto no es revertible!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#38d39f',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Borrar!'
    }).then((result) => {
        if (result.isConfirmed) {

            //deletePrivilege(ID)
            Swal.fire(
                'Borrado!',

            ).then((result) => {
                if (result.isConfirmed) {
                    GenerateHardcodeRow() //originalmente tendria que repoblaR
                }
            })

        }
    })
}


function fillList() {



}