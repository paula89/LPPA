function modificarPrivilegio(){

}



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