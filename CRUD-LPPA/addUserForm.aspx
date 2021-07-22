﻿<%@ Page Title="Users" Language="C#" MasterPageFile="~/CRUD-LPPA.Master" AutoEventWireup="true" CodeBehind="addUserForm.aspx.cs" Inherits="CRUD_LPPA.addUserForm" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <div class="container">

		<link rel="stylesheet" type="text/css" href="./Content/styleManageUsers.css">

				<div class="card">
					<div class="card-header">
						<h4>Información del usuario</h4>
					</div>
					<div class="card-body">
							<div class="form-group row">
								<label  class="col-lg-3 col-form-label form-control-label">ID</label>
								<div class="col-lg-9">
									<input runat="server" class="form-control" type="text" id="usrsID" disabled>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-lg-3 col-form-label form-control-label">Nombre</label>
								<div class="col-lg-9">
									<input class="form-control" type="text" id="nombre">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-lg-3 col-form-label form-control-label">Apellido</label>
								<div class="col-lg-9">
									<input class="form-control" type="text" id="apellido">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-lg-3 col-form-label form-control-label" >Privilegios</label>
								<div class="col-lg-9" id="privilegios">
									
								</div>
							</div>
							<div class="form-group row">
								<label class="col-lg-3 col-form-label form-control-label" >Contraseña</label>
								<div class="col-lg-9">
									<input class="form-control" type="password" id="password">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-lg-3 col-form-label form-control-label" >Confirme la contraseña</label>
								<div class="col-lg-9">
									<input class="form-control" type="password" id="password2">
								</div>
							</div>
							<div class="form-group row">
								<div class="col-lg-12 text-center">
									<input type="reset" class="btn btn-secondary" value="Cancelar" onclick="location.replace('seeUsersFormAdmin.aspx?user='+document.getElementById('userTitle').innerHTML); return false;">
									<input type="button" class="btn btn-primary" value="Guardar" onclick="AltaModif(1)">
								</div>
							</div>
					</div>
				</div>
            </div>
</asp:Content>
