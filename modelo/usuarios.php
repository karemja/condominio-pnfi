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
    $co = $this->conecta();
		$co->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    try {
				$co->query("Insert into usuarios(
					cedula,
					usuario,
          clave,
          correo,
          telefono,
          direccion
					)
					Values(
					'$this->cedula',
					'$this->usuario',
          '$this->clave',
          '$this->correo',
          '$this->telefono',
          '$this->direccion'
					)");
					return "Registro incluido";
		} catch(Exception $e) {
			return $e->getMessage();
		}   
	}
	
	function modificar(){
		$co = $this->conecta();
		$co->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		try {
				$co->query("Update usuarios set 
					usuario = '$this->usuario',
          clave = '$this->clave',
          correo = '$this->correo',
          telefono = '$this->telefono',
          direccion = '$this->direccion'
          where cedula = '$this->cedula'");
					return "Registro modificado";
		} catch(Exception $e) {
			return $e->getMessage();
		}
	}
	
	function eliminar(){
    $co = $this->conecta();
		$co->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		try {
				$co->query("Delete from usuarios 
          where cedula = '$this->cedula'");
					return "Registro eliminado";
		} catch(Exception $e) {
			return $e->getMessage();
		}
	}
  
  
  function consultar(){
		$co = $this->conecta();
		$co->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		try{
			
			$resultado = $co->query("Select * from usuarios");
			
			if($resultado){
				
				$respuesta = '';
				foreach($resultado as $r){
					$respuesta = $respuesta."<tr>";
						$respuesta = $respuesta."<td>";
							$respuesta = $respuesta.$r['cedula'];
						$respuesta = $respuesta."</td>";
						$respuesta = $respuesta."<td>";
							$respuesta = $respuesta.$r['usuario'];
						$respuesta = $respuesta."</td>";
						$respuesta = $respuesta."<td>";
							$respuesta = $respuesta.$r['clave'];
						$respuesta = $respuesta."</td>";
					$respuesta = $respuesta."</tr>";
				}
				return $respuesta;
			    
			}
			else{
				return '';
			}
			
		}catch(Exception $e){
			return $e->getMessage();
		}
		
  }
  
  function consultatr($cedula){
		$co = $this->conecta();
		$co->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		try{
			
			$resultado = $co->query("Select * from usuarios where cedula='$cedula'");
			$fila = $resultado->fetchAll(PDO::FETCH_BOTH);
			if($fila){

				return json_encode($fila);
			    
			}
			else{
				
				return '';
			}
			
		}catch(Exception $e){
			return $e->getMessage();
		}
		
	}
}
