<?php
  //verifica que exista la vista de
  //la pagina
  if(is_file("vista/".$pagina.".php")){
	  //si existe se la trae, ahora ve a la carpeta vista
    //y busca el archivo principal.php 
    if(isset($_POST['accion'])){
		  $accion = $_POST['accion'];
		  if($accion=='incluir'){
			echo "USTED DESEA INCLUIR <br/>".$_POST['cedula']."<br/>".
				$_POST['usuario'];  
		  }
		  elseif($accion=='modificar'){
			echo "USTED DESEA MODIFICAR <br/>".$_POST['cedula']."<br/>".
			$_POST['usuario'];  
		  }
		  elseif($accion=='eliminar'){
			echo "USTED DESEA ELIMINAR <br/>".$_POST['cedula']."<br/>".
			$_POST['usuario'];  
      }
      exit;
    }
    
	  require_once("vista/".$pagina.".php"); 
  }
  else{
	  echo "pagina en construccion";
  }
?>