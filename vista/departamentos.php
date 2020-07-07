<html>
<?php require_once('comunes/cabecera.php'); ?>
<body>

<div class="container">
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img src="img/logo.jpeg" alt="" style="width:50px;">
		<label class="navbar-brand" >Departamentos</label>
		<?php require_once('comunes/menu.php'); ?>
  </nav>
</div>  

<div class="container">
<hr/>
</div>


<div class="container">
	<ul class="nav nav-tabs" role="tablist">
	  <li class="nav-item">
		<a class="nav-link active" href="#dptn" role="tab" data-toggle="tab">Piso / Torre / Numero</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link" href="#dpropietario" role="tab" data-toggle="tab">Propietario</a>
	  </li>
	</ul>
</div>

<div class="container">
	<div class="tab-content">
	  <div role="tabpanel" class="tab-pane active" id="dptn">
		<div class="container"> <!-- todo el contenido ira dentro de esta etiqueta-->
			<form method="post" action="" id="fptn">

				<div class="row">
					<div class="col">
					   <label for="piso">Piso</label>
					   <input class="form-control" type="text" id="piso" name="piso" />
					   <span id="spiso"></span>
					</div>
				</div>

				<div class="row">
					<div class="col">
					   <label for="torre">Torre</label>
					   <input class="form-control" type="text" id="torre" name="torre" />
					</div>
					<div class="col">
					   <label for="numero">Numero</label>
					   <input class="form-control" type="text" id="numero" name="numero" />
					</div>
				</div>
				
			</form>
		</div> <!-- fin de container -->
	  </div>
	  
	  
	  <div role="tabpanel" class="tab-pane fade" id="dpropietario">
		<div class="container"> <!-- todo el contenido ira dentro de esta etiqueta-->
			<form method="post" action="" id="fpropietario">

				<div class="row">
					<div class="col">
					   <label for="cedula">Cedula</label>
					   <input class="form-control" type="text" id="cedulap" name="cedulap" />
					   <span id="scedulap"></span>
					</div>
					<div class="col">
					   <label for="Nombre">Nombre</label>
					   <input class="form-control" type="text" id="nombrep" name="nombrep" />
					   <span id="snombrep"></span>
					</div>
				</div>

				<div class="row">
					<div class="col">
					   <label for="apellido">Apellido</label>
					   <input class="form-control" type="text" id="apellidop" name="apellidop" />
					   <span id="sapellidop"></span>
					</div>
					<div class="col">
					   <label for="telefono">Telefono</label>
					   <input class="form-control" type="text" id="telefonop" name="telefonop" />
					   <span id="stelefonop"></span>
					</div>
				</div>
				
				<div class="row">
					<div class="col">
					   <label for="cedula">Correo</label>
					   <input class="form-control" type="text" id="correop" name="correop" />
					   <span id="scorreop"></span>
					</div>
				</div>
		
			</form>
		</div> <!-- fin de container -->
	  </div>
	</div>
</div>

<div class="container">
    <div class="row">
		<div class="col">
			<hr/>
		</div>
	</div>
	<div class="row">
		<div class="col">
			   <button type="button" class="btn btn-primary" id="incluir" name="incluir">INCLUIR</button>
		</div>
		<div class="col">	
			   <button type="button" class="btn btn-primary" id="consultar" name="consultar">CONSULTAR</button>
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

</body>
</html>