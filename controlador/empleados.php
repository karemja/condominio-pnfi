<?php
  //verifica que exista la vista de
  //la pagina
  if(is_file("vista/".$pagina.".php")){
	  //si existe se la trae, ahora ve a la carpeta vista
    //y busca el archivo principal.php 
    
    if(isset($_POST['accion'])){
		  $accion = $_POST['accion'];
		  if($accion=='incluir'){
			$datos_enviados = "USTED DESEA INCLUIR <br/>".$_POST['cedula']."<br/>".
				$_POST['nombre']." ".$_POST['apellido'];  
		  }
		  elseif($accion=='modificar'){
			$datos_enviados = "USTED DESEA MODIFICAR <br/>".$_POST['cedula']."<br/>".
			$_POST['nombre']." ".$_POST['apellido'];  
		  }
		  elseif($accion=='eliminar'){
			$datos_enviados = "USTED DESEA ELIMINAR <br/>".$_POST['cedula']."<br/>".
			$_POST['nombre']." ".$_POST['apellido'];  
		  }
	  }

	  require_once("vista/".$pagina.".php"); 
  }
  else{
	  echo "pagina en construccion";
  }
