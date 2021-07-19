<%@ Page Title="" Language="C#" MasterPageFile="~/CRUD-LPPA.Master" AutoEventWireup="true" CodeBehind="seeUsersForm.aspx.cs" Inherits="CRUD_LPPA.seeUsersForm" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    
    <link rel="stylesheet" type="text/css" href="./Content/styleUsersForm.css">
    <div id="bodySimulado">
        <div class="list">
          <ul>
            <li>Nombre</li>
            <li>Apellido</li>
            <li>Email</li>
            <li>Direccion</li>
            <li>Privilegios</li>
          </ul>
          <ul>
            <li data-label="nombre">Paula</li>
            <li data-label="apellido">Riveros</li>
            <li data-label="Email">paula@email.com</li>
            <li data-label="Direccion">direccion 124</li>
            <li data-label="Privilegios">Admin</li>
          </ul>
          <ul>
            <li data-label="nombre">Juan</li>
            <li data-label="apellido">Flores</li>
            <li data-label="Email">juan@email.com</li>
            <li data-label="Direccion">direccion 124</li>
            <li data-label="Privilegios">read</li>
          </ul>
          <ul>
            <li data-label="nombre">Ariel</li>
            <li data-label="apellido">Tolava</li>
            <li data-label="Email">ariel@email.com</li>
            <li data-label="Direccion">direccion 124</li>
            <li data-label="Privilegios">read</li>

          </ul>

  
        </div>
    </div>

</asp:Content>
