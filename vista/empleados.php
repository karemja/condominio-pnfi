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
      <label class="navbar-brand">Empleados</label>
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
          <div class="col">
            <label for="apellido">Apellido</label>
            <input class="form-control" type="text" id="apellido" name="apellido" />
            <span id="sapellido"></span>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="nombre">Nombre</label>
            <input class="form-control" type="text" id="nombre" name="nombre" />
            <span id="snombre"></span>
          </div>
          <div class="col">
            <label for="telefono">Teléfono</label>
            <input class="form-control" type="text" id="telefono" name="telefono" />
            <span id="stelefono"></span>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="direccion">Dirección</label>
            <input class="form-control" type="text" id="direccion" name="direccion" />
            <span id="sdireccion"></span>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="correo">Correo</label>
            <input class="form-control" type="text" id="correo" name="correo" />
            <span id="scorreo"></span>
          </div>
          <div class="col">
            <label for="cargo">Cargo</label>
            <input class="form-control" type="text" id="cargo" name="cargo" />
            <span id="scargo"></span>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="fecha_ingreso">Fecha de Ingreso</label>
            <input class="form-control" type="date" id="fecha_ingreso" name="fecha_ingreso" />
            <span id="sfecha_ingreso"></span>
          </div>
          <div class="col">
            <label for="salario">Salario</label>
            <input class="form-control" type="text" id="salario" name="salario" />
            <span id="ssalario"></span>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="hora_entrada">Hora de Entrada</label>
            <input class="form-control" type="time" id="hora_entrada" name="hora_entrada" />
            <span id="shora_entrada"></span>
          </div>
          <div class="col">
            <label for="hora_salida">Hora de Salida</label>
            <input class="form-control" type="time" id="hora_salida" name="hora_salida" />
            <span id="shora_salida"></span>
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

  <div class="modal fade" tabindex="-1" role="dialog" id="modal1">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-header text-light bg-info">
        <h5 class="modal-title">Listado de Empleados</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-content">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>Cedula</th>
              <th>Nombre</th>
              <th>Cargo</th>
              <th>Fecha de Inngreso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12345678</td>
              <td>Pedro</td>
              <td>Vijilante</td>
              <td>16/05/2015</td>
            </tr>
            <tr>
              <td>77777777</td>
              <td>Maria</td>
              <td>Conserje</td>
              <td>13/07/2019</td>
            </tr>
            <tr>
              <td>99999999</td>
              <td>Tanos</td>
              <td>Vijilante</td>
              <td>12/02/2018</td>
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

  <script type="text/javascript" src="js/valida-empleados.js"></script>
</body>

</html>