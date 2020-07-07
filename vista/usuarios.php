<html>
<?php require_once('comunes/cabecera.php'); ?>
<body>

<div class="container">
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img src="img/logo.jpeg" alt="" style="width:50px;">
		<label class="navbar-brand" >Usuarios</label>
		<?php require_once('comunes/menu.php'); ?>
  </nav>
</div>  

<div class="container">
<hr/>
</div>
<div class="container"> <!-- todo el contenido ira dentro de esta etiqueta-->

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
		</div>
		
		<div class="col">
		   <label for="clave">Clave</label>
		   <input class="form-control" type="text" id="clave" name="clave" />
		</div>
		
	</div>
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
</form>
</div> <!-- fin de container -->
</body>
</html>