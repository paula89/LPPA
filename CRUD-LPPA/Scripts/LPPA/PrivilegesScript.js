
function addRow(){
    document.getElementById('list').innerHTML += 
`
    <ul>
    <li data-label="nombre">
        <input value="" />
    </li>
    <li data-label="descripcion">
        <input value=""/>
    </li>
    <li data-label="accion">
        <i class="fas fa-edit" onclick="document.getElementById('nameInput').removeAttribute('disabled')"></i>

        <i class="far fa-check-circle" onclick="modificarPrivilegio() ? alert('Privilegio modificado con exito') : alert('Ha ocurrido un error')" ></i>

        <i class="fas fa-trash-alt" onclick="return confirm('¿Desea eliminar el privilegio seleccionado?')"></i>
    </li>
  </ul>  
`

}

let localURL = 'http://localhost:8000/privileges'

async function retrieveALL() {
    let response = await fetch(localURL, {
        headers: '{{key:"' + localStorage.getItem("key") + '"}}'

    })
    let returnedData = response.json();
}

async function createPrivilege(privilegeID, description) {
    let response = await fetch(localURL + "/" + privilegeID, {
        method: 'POST', //aclaro para que quede ordenado
        headers: '{{key:"' + localStorage.getItem("key") + '"}}',
        body: description // a definir
    })
    let returnedData = response.json();
}

async function modifyPrivilege(privilegeID, description) {
    let response = await fetch(localURL + "/" + privilegeID, {
        method: 'PUT', //aclaro para que quede ordenado
        headers: '{{key:"' + localStorage.getItem("key") + '"}}',
        body: description // a definir
    })
    let returnedData = response.json();
}

async function deletePrivilege(privilegeID) {
    let response = await fetch(localURL + "/" + privilegeID, {
        method: 'DELETE', //aclaro para que quede ordenado
        headers: '{{key:"' + localStorage.getItem("key") + '"}}',
    })
    let returnedData = response.json();
}