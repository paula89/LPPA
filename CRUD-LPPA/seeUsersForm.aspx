<%@ Page Title="Users" Language="C#" MasterPageFile="~/CRUD-LPPA.Master" AutoEventWireup="true" CodeBehind="seeUsersForm.aspx.cs" Inherits="CRUD_LPPA.seeUsersForm" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    
    <link rel="stylesheet" type="text/css" href="./Content/styleUsersForm.css">
    <div id="bodySimulado" onload="TestTables()">
         <table class="table table-striped" id="usersTable">
         <thread>
            <tr id="usersAtributes">
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
                <th scope="col">Direccion</th>
                <th scope="col">Privilegios</th>
            </tr>
        </thread>
        <tbody id="rowContent">
        </tbody>
    </table>

        <div class="form-group row">
          <div class="col-lg-3 text-center">
            <input type="button" class="btn btn-warning" value=" Usuario"  onclick="TestTables(false); return false;">
          </div>
        </div>
    </div>

</asp:Content>
