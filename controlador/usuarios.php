<?php
//verifica que exista la vista de
//la pagina
require_once('modelo/usuarios.php');
if (!is_file("modelo/" . $pagina . ".php")) {
  echo "falta definir la clase " . $pagina;
}

if (is_file("vista/" . $pagina . ".php")) {
  //si existe se la trae, ahora ve a la carpeta vista
  //y busca el archivo principal.php

  $o = new usuarios();

  if (isset($_POST['accion'])) {

    //como ya sabemos si estamos aca es porque se recibio alguna informacion
    //de la vista, por lo que lo primero que debemos hacer ahora que tenemos una 
    //clase es guardar esos valores en ella con los metodos set

    $accion = $_POST['accion'];

    if ($accion == 'consultar') {
      echo $o->consultar();
      exit;
    }
    $o->set_cedula($_POST['cedula']);
    $o->set_usuario($_POST['usuario']);
    $o->set_clave($_POST['clave']);
    $o->set_correo($_POST['correo']);
    $o->set_telefono($_POST['telefono']);
    $o->set_direccion($_POST['direccion']);

    if ($accion == 'incluir') {
      echo  $o->incluir();
    } elseif ($accion == 'modificar') {
      echo  $o->modificar();
    } elseif ($accion == 'eliminar') {
      echo  $o->eliminar();
    }
    exit;
  }

  require_once("vista/" . $pagina . ".php");
} else {
  echo "pagina en construccion";
}
