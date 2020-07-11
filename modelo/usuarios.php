<?php

require_once('modelo/datos.php');

class usuarios extends datos {

  private $cedula;
  private $usuario;
  private $clave;
  private $correo;
  private $telefono;
  private $direccion;

  function set_cedula ($valor) {
    $this->cedula = $valor;
  }

  function set_usuario ($valor) {
    $this->usuario = $valor;
  }

  function set_clave ($valor) {
    $this->clave = $valor;
  }

  function set_correo ($valor) {
    $this->correo = $valor;
  }

  function set_telefono ($valor) {
    $this->telefono = $valor;
  }

  function set_direccion ($valor) {
    $this->direccion = $valor;
  }

  function get_cedula() {
    return $this->cedula;
  }

  function get_usuario() {
    return $this->usuario;
  }

  function get_clave() {
    return $this->clave;
  }

  function get_correo() {
    return $this->correo;
  }

  function get_telefono() {
    return $this->telefono;
  }

  function get_direccion() {
    return $this->direccion;
  }

  function incluir(){
		//aca iran las instrucciones sql, por lo pronto solo retornaremos un mensaje
		return "Usted va a incluir <br/>".$this->cedula.
        "<br/>".$this->usuario."<br/>".$this->clave.
        "<br/>".$this->correo."<br/>".$this->telefono.
				"<br/>".$this->direccion;       
	}
	
	function modificar(){
		//aca iran las instrucciones sql, por lo pronto solo retornaremos un mensaje
		return "Usted va a modificar <br/>".$this->cedula.
        "<br/>".$this->usuario."<br/>".$this->clave.
        "<br/>".$this->correo."<br/>".$this->telefono.
				"<br/>".$this->direccion;
	}
	
	function eliminar(){
		//aca iran las instrucciones sql, por lo pronto solo retornaremos un mensaje
		return "Usted va a eliminar <br/>".$this->cedula;
	}
	
}
