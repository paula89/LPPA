<%@ Page Title="Users" Language="C#" MasterPageFile="~/CRUD-LPPA.Master" AutoEventWireup="true" CodeBehind="seeUsersFormAdmin.aspx.cs" Inherits="CRUD_LPPA.seeUsersFormAdmin" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

    <link rel="stylesheet" type="text/css" href="/Content/styleUsersForm.css">
    <script type="text/javascript" src="\Scripts\LPPA\ForTests.js"></script>

    <table class="table table-striped" id="usersTable" onload="TestTable()">
        <thread>
            <tr id="usersAtributes">
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
                <th scope="col">Direccion</th>
                <th scope="col">Privilegios</th>
                <th scope="col">Acción</th>
            </tr>
        </thread>
        <tbody>
        </tbody>
    </table>


    <div class="list">
  <ul>
    <li>Nombre</li>
    <li>Apellido</li>
    <li>Email</li>
    <li>Direccion</li>
    <li>Privilegios</li>
    <li>Acción</li>
  </ul>
  <ul>
    <li data-label="nombre">Paula</li>
    <li data-label="apellido">Riveros</li>
    <li data-label="Email">paula@email.com</li>
    <li data-label="Direccion">direccion 124</li>
    <li data-label="Privilegios">Admin</li>
    <li data-label="Acción">
      <i class="fas fa-edit" onclick="location.replace('modifyUsersForm.aspx?user='+document.getElementById('userTitle').innerHTML); return false;"></i>
    </li>
  </ul>
  <ul>
    <li data-label="nombre">Juan</li>
    <li data-label="apellido">Flores</li>
    <li data-label="Email">juan@email.com</li>
    <li data-label="Direccion">direccion 124</li>
    <li data-label="Privilegios">read</li>
    <li data-label="Acción">
      <i class="fas fa-edit" onclick="location.replace('modifyUsersForm.aspx?user='+document.getElementById('userTitle').innerHTML); return false;"></i>
    </li>
  </ul>
  <ul>
    <li data-label="nombre">Ariel</li>
    <li data-label="apellido">Tolava</li>
    <li data-label="Email">ariel@email.com</li>
    <li data-label="Direccion">direccion 124</li>
    <li data-label="Privilegios">read</li>
    <li data-label="Acción">
      <i class="fas fa-edit" onclick="location.replace('modifyUsersForm.aspx?user='+document.getElementById('userTitle').innerHTML); return false;"></i>
    </li>
  </ul>
  
</div>

<div class="form-group row">
  <div class="col-lg-3 text-center">
    <input type="button" class="btn btn-warning" value="Nuevo Usuario"  onclick="location.replace('addUserForm.aspx?user='+document.getElementById('userTitle').innerHTML); return false;">
  </div>
</div>

<div class="form-group row">
  <div class="col-lg-3 text-center">
    <input type="button" class="btn btn-warning" value=" Usuario"  onclick="TestTable(); return false;">
  </div>
</div>

</asp:Content>
