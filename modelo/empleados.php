<?php

require_once('modelo/datos.php');

class empleados extends datos
{
  private $cedula;
  private $apellido;
  private $nombre;
  private $telefono;
  private $direccion;
  private $correo;
  private $cargo;
  private $fecha_ingreso;
  private $salario;
  private $hora_entrada;
  private $hora_salida;

  function set_cedula($valor)
  {
    $this->cedula = $valor;
  }

  function set_apellido($valor)
  {
    $this->apellido = $valor;
  }

  function set_nombre($valor)
  {
    $this->nombre = $valor;
  }

  function set_telefono($valor)
  {
    $this->telefono = $valor;
  }

  function set_direccion($valor)
  {
    $this->direccion = $valor;
  }

  function set_correo($valor)
  {
    $this->correo = $valor;
  }

  function set_cargo($valor)
  {
    $this->cargo = $valor;
  }

  function set_fecha_ingreso($valor)
  {
    $this->fecha_ingreso = $valor;
  }

  function set_salario($valor)
  {
    $this->salario = $valor;
  }

  function set_hora_entrada($valor)
  {
    $this->hora_entrada = $valor;
  }

  function set_hora_salida($valor)
  {
    $this->hora_salida = $valor;
  }

  function get_cedula()
  {
    return $this->cedula;
  }

  function get_apellido()
  {
    return $this->apellido;
  }

  function get_nombre()
  {
    return $this->nombre;
  }

  function get_telefono()
  {
    return $this->telefono;
  }

  function get_direccion()
  {
    return $this->direccion;
  }

  function get_correo()
  {
    return $this->correo;
  }

  function get_cargo()
  {
    return $this->cargo;
  }

  function get_fecha_ingreso()
  {
    return $this->fecha_ingreso;
  }

  function get_salario()
  {
    return $this->salario;
  }

  function get_hora_entrada()
  {
    return $this->hora_entrada;
  }

  function get_hora_salida()
  {
    return $this->hora_salida;
  }

  function incluir()
  {
    $co = $this->conecta();
    $co->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    try {
      $co->query("Insert into empleados (
					cedula,
					apellido,
          nombre,
          correo,
          telefono,
          direccion,
          cargo,
          fecha_ingreso,
          salario,
          hora_salida,
          hora_entrada
					)
					Values(
					'$this->cedula',
					'$this->apellido',
          '$this->nombre',
          '$this->correo',
          '$this->telefono',
          '$this->direccion',
          '$this->cargo',
          '$this->fecha_ingreso',
          '$this->salario',
          '$this->hora_salida',
          '$this->hora_entrada'
					)");
      return "Registro incluido";
    } catch (Exception $e) {
      return $e->getMessage();
    }
  }

  function modificar()
  {
    $co = $this->conecta();
    $co->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    try {
      $co->query("Update empleados set 
					apellido = '$this->apellido',
          nombre = '$this->nombre',
          correo = '$this->correo',
          telefono = '$this->telefono',
          direccion = '$this->direccion',
          cargo = '$this->cargo',
          fecha_ingreso = '$this->fecha_ingreso',
          salario = '$this->salario',
          hora_salida = '$this->hora_salida',
          hora_entrada = '$this->hora_entrada'
          where cedula = '$this->cedula'");
      return "Registro modificado";
    } catch (Exception $e) {
      return $e->getMessage();
    }
  }

  function eliminar()
  {
    $co = $this->conecta();
    $co->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    try {
      $co->query("Delete from empleados 
          where cedula = '$this->cedula'");
      return "Registro eliminado";
    } catch (Exception $e) {
      return $e->getMessage();
    }
  }

  function consultar()
  {
    $co = $this->conecta();
    $co->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    try {

      $resultado = $co->query("Select * from empleados");

      if ($resultado) {

        $respuesta = '';
        foreach ($resultado as $r) {
          $respuesta = $respuesta . "<tr>";
          $respuesta = $respuesta . "<td>";
          $respuesta = $respuesta . $r['cedula'];
          $respuesta = $respuesta . "</td>";
          $respuesta = $respuesta . "<td>";
          $respuesta = $respuesta . $r['nombre'];
          $respuesta = $respuesta . "</td>";
          $respuesta = $respuesta . "<td>";
          $respuesta = $respuesta . $r['cargo'];
          $respuesta = $respuesta . "</td>";
          $respuesta = $respuesta . "<td>";
          $respuesta = $respuesta . $r['fecha_ingreso'];
          $respuesta = $respuesta . "</td>";
          $respuesta = $respuesta . "</tr>";
        }
        return $respuesta;
      } else {
        return '';
      }
    } catch (Exception $e) {
      return $e->getMessage();
    }
  }
}
