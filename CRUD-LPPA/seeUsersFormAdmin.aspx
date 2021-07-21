<%@ Page Title="Users" Language="C#" MasterPageFile="~/CRUD-LPPA.Master" AutoEventWireup="true" CodeBehind="seeUsersFormAdmin.aspx.cs" Inherits="CRUD_LPPA.seeUsersFormAdmin" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

    <link rel="stylesheet" type="text/css" href="/Content/styleUsersForm.css">
    <script type="text/javascript" src="\Scripts\LPPA\ForTests.js"></script>

    <div class="container">
    <table class="table table-striped" id="usersTable">
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
        <tbody id="rowContent">
        </tbody>
    </table>

        <div class="form-group row">
          <div class="col-lg-3 text-center">
            <input type="button" class="btn btn-warning" value="Nuevo Usuario"  onclick="location.replace('addUserForm.aspx?user='+document.getElementById('userTitle').innerHTML); return false;">
          </div>
        </div>

        <div class="form-group row">
          <div class="col-lg-3 text-center">
            <input type="button" class="btn btn-warning" value=" Usuario"  onclick="TestTables(true); return false;">
          </div>
        </div>
    </div>
</asp:Content>
