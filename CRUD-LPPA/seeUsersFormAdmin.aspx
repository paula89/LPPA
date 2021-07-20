﻿<%@ Page Title="Users" Language="C#" MasterPageFile="~/CRUD-LPPA.Master" AutoEventWireup="true" CodeBehind="seeUsersFormAdmin.aspx.cs" Inherits="CRUD_LPPA.seeUsersFormAdmin" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

    <link rel="stylesheet" type="text/css" href="/Content/styleUsersForm.css">

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
      <i class="fas fa-edit" onclick="location.replace('https://localhost:44392/modifyUsersForm.aspx'); return false;"></i>
    </li>
  </ul>
  <ul>
    <li data-label="nombre">Juan</li>
    <li data-label="apellido">Flores</li>
    <li data-label="Email">juan@email.com</li>
    <li data-label="Direccion">direccion 124</li>
    <li data-label="Privilegios">read</li>
    <li data-label="Acción">
      <i class="fas fa-edit" onclick="location.replace('https://localhost:44392/modifyUsersForm.aspx'); return false;"></i>
    </li>
  </ul>
  <ul>
    <li data-label="nombre">Ariel</li>
    <li data-label="apellido">Tolava</li>
    <li data-label="Email">ariel@email.com</li>
    <li data-label="Direccion">direccion 124</li>
    <li data-label="Privilegios">read</li>
    <li data-label="Acción">
      <i class="fas fa-edit" onclick="location.replace('https://localhost:44392/modifyUsersForm.aspx'); return false;"></i>
    </li>
  </ul>
  
</div>

<div class="form-group row">
  <div class="col-lg-3 text-center">
    <input type="button" class="btn btn-warning" value="Nuevo Usuario"  onclick="location.replace('https://localhost:44392/addUsersForm.aspx'); return false;">
  </div>
</div>

</asp:Content>