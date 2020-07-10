<html>
<?php require_once('comunes/cabecera.php'); ?>

<body>

	<?php require_once("comunes/modal.php"); ?>

	<div class="container">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<img src="img/logo.jpeg" alt="" style="width:50px;">
			<label class="navbar-brand">Usuarios</label>
			<?php require_once('comunes/menu.php'); ?>
		</nav>
	</div>

	<div class="container">
		<hr />
	</div>
	<div class="container">
		<!-- todo el contenido ira dentro de esta etiqueta-->

		<form method="post" action="" id="f">
			<div class="container">
				<div class="row">
					<div class="col">
						<label for="cedula">Cedula</label>
						<input class="form-control" type="text" id="cedula" name="cedula" />
						<span id="scedula"></span>
					</div>
				</div>

				<div class="row">

					<div class="col">
						<label for="usuario">Usuario</label>
						<input class="form-control" type="text" id="usuario" name="usuario" />
						<span id="susuario"></span>
					</div>

					<div class="col">
						<label for="clave">Clave</label>
						<input class="form-control" type="password" id="clave" name="clave" />
						<span id="sclave"></span>
					</div>

				</div>

				<div class="row">

					<div class="col">
						<label for="correo">Correo</label>
						<input class="form-control" type="text" id="correo" name="correo" />
						<span id="scorreo"></span>
					</div>

					<div class="col">
						<label for="telefono">telefono</label>
						<input class="form-control" type="text" id="telefono" name="telefono" />
						<span id="stelefono"></span>
					</div>

				</div>

				<div class="row">
					<div class="col">
						<label for="direccion">Direccion</label>
						<input class="form-control" type="text" id="direccion" name="direccion" />
						<span id="sdireccion"></span>
					</div>
				</div>

				<div class="row">
					<div class="col">
						<hr />
					</div>
				</div>

				<div class="row">
					<div class="col">
						<button type="button" class="btn btn-primary" id="incluir" name="incluir">INCLUIR</button>
					</div>
					<div class="col">
						<button type="button" class="btn btn-primary" id="consultar" data-toggle="modal" data-target="#modal1" name="consultar">CONSULTAR</button>
					</div>
					<div class="col">
						<button type="button" class="btn btn-primary" id="modificar" name="modificar">MODIFICAR</button>
					</div>
					<div class="col">
						<button type="button" class="btn btn-primary" id="eliminar" name="eliminar">ELIMINAR</button>
					</div>
					<div class="col">
						<a href="." class="btn btn-primary">REGRESAR</a>
					</div>
				</div>
			</div>
		</form>
	</div> <!-- fin de container -->

	<!-- seccion del modal -->
	<div class="modal fade" tabindex="-1" role="dialog" id="modal1">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-header text-light bg-info">
				<h5 class="modal-title">Listado de Usuarios</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-content">
				<table class="table table-striped table-hover">
					<thead>
						<tr>
							<th>Cedula</th>
							<th>Usuario</th>
							<th>Clave</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>12345678</td>
							<td>Pedro</td>
							<td>******</td>
						</tr>
						<tr>
							<td>77777777</td>
							<td>Maria</td>
							<td>*******</td>
						</tr>
						<tr>
							<td>99999999</td>
							<td>Tanos</td>
							<td>*******</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="modal-footer bg-light">
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
			</div>
		</div>
	</div>
	<!--fin de seccion modal-->


	<script src="js/valida-usuarios.js"></script>
</body>

</html>