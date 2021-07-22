<%@ Page Title="Privileges" Language="C#" MasterPageFile="~/CRUD-LPPA.Master" AutoEventWireup="true" CodeBehind="privilegesForm.aspx.cs" Inherits="CRUD_LPPA.privilegesForm" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

    <link rel="stylesheet" type="text/css" href="/Content/styleUsersForm.css">
    <script type="text/javascript" src="./Scripts/LPPA/PrivilegesScript.js"></script>


<div class="table-wrapper-scroll-y my-custom-scrollbar">
    <table class="table table-striped" id="permTable" cellspacing="0";>
        <thead id="headContent">
            <tr id="usersAtributes">
                <th>ID</th>
                <th>Descripcion</th>
                <th>Acción</th>
            </tr>
        </thead>
        <tbody id="rowContent">
        </tbody>
    </table>
    </div>
    <div class="form-group row">
          <div class="col-lg-3 text-center">
            <input type="button" class="btn btn-warning" value="Nuevo Permiso"  onclick="">
          </div>
        </div>

    <script>
        $(document).ready(function(){
            $('#usersTable').DataTable({
                "scrollY": "50vh",
                "scrollCollapse": true,
                paging: false,
                ordering: false,
                searching: false,
                info: false,
                
                
            });
            $(".dataTables_empty").empty();

            TestTables(true)
        })
    </script>



    <div id="list" class="list">
  <ul>
    <li>Nombre</li>
    <li>Descripcion</li>
    <li>Acción</li>
  </ul>
  <ul>
    <li data-label="nombre">
        <input id = "nameInput" value="Admin" disabled/>
    </li>
    <li data-label="descripcion">
        <input id = "descriptionInput" value="super user" disabled/>
    </li>
    <li data-label="Acción">
      <i class="fas fa-edit" onclick="document.getElementById('nameInput').removeAttribute('disabled')
                                      document.getElementById('descriptionInput').removeAttribute('disabled')" ></i>

      <i class="far fa-check-circle" onclick="modificarPrivilegio() ? alert('Privilegio modificado con exito') : alert('Ha ocurrido un error') ;
                                              document.getElementById('nameInput').setAttribute('disabled')
                                              document.getElementById('descriptionInput').setAttribute('disabled')" ></i>

      <i class="fas fa-trash-alt" onclick="return confirm('¿Desea eliminar el privilegio seleccionado?')"></i>
    </li>
  </ul>
  <ul>
    <li data-label="">
        <input value="Solo lectura" disabled/>
    </li>
    <li data-label="descripcion">
        <input value="lectura de usuarios" disabled/>
    </li>
    <li data-label="accion">
        <i class="fas fa-edit" onclick="document.getElementById('nameInput').removeAttribute('disabled')"></i>

        <i class="far fa-check-circle" onclick="modificarPrivilegio() ? alert('Privilegio modificado con exito') : alert('Ha ocurrido un error')" ></i>

        <i class="fas fa-trash-alt" onclick="return confirm('¿Desea eliminar el privilegio seleccionado?')"></i>
    </li>
  </ul>  
</div>

<div class="form-group row">
  <div class="col-lg-3 text-center">
    <input type="button" class="btn btn-warning" value="Nuevo"  
    onclick="addRow()">
  </div>
</div>

</asp:Content>
