<html>
<?php require_once('comunes/cabecera.php'); ?>

<body>

  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <img src="img/logo.jpeg" alt="" style="width:50px;">
      <label class="navbar-brand">Proveedores</label>
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
            <label for="rif">rif</label>
            <input class="form-control" type="text" id="rif" name="rif" />
            <span id="srif"></span>
          </div>
          <div class="col">
            <label for="contacto">Persona de Contacto</label>
            <input class="form-control" type="text" id="contacto" name="contacto" />
            <span id="scontacto"></span>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="telefono">Teléfono</label>
            <input class="form-control" type="text" id="telefono" name="telefono" />
            <span id="stelefono"></span>
          </div>
          <div class="col">
            <label for="Correo">Correo</label>
            <input class="form-control" type="text" id="Correo" name="Correo" />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="razon_social">Razón Social</label>
            <input class="form-control" type="text" id="razon_social" name="razon_social" />
            <span id="srazon_social"></span>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="direccion">Dirección Fiscal</label>
            <input class="form-control" type="text" id="direccion" name="direccion" />
            <span id="sdireccion"></span>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="servicio">Servicios ó Productos</label>
            <input class="form-control" type="text" id="servicio" name="servicio" />
            <span id="servicio"></span>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="cotizacion">Cotización</label>
            <input class="form-control" type="text" id="cotizacion" name="cotizacion" />
            <span id="scotizacion"></span>
          </div>
          <div class="col">
            <label for="forma_pago">Forma de Pago</label>
            <input class="form-control" type="text" id="forma_pago" name="forma_pago" />
            <span id="sforma_pago"></span>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="fecha_cotizacion">Fecha de Cotización</label>
            <input class="form-control" type="date" id="fecha_cotizacion" name="fecha_cotizacion" />
            <span id="sfecha_cotizacion"></span>
          </div>
          <div class="col">
            <label for="fecha_tope">Cotización Valida Hasta</label>
            <input class="form-control" type="date" id="fecha_tope" name="fecha_tope" />
            <span id="fecha_tope"></span>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <hr />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <button type="submit" class="btn btn-primary" id="incluir" name="incluir">INCLUIR</button>
          </div>
          <div class="col">
            <button type="button" class="btn btn-primary" id="consultar" data-toggle="modal" data-target="#modal1" name="consultar">CONSULTAR</button>
          </div>
          <div class="col">
            <button type="submit" class="btn btn-primary" id="modificar" name="modificar">MODIFICAR</button>
          </div>
          <div class="col">
            <button type="submit" class="btn btn-primary" id="eliminar" name="eliminar">ELIMINAR</button>
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
              <th>rif</th>
              <th>Razón Social</th>
              <th>Servicios/Productos</th>
              <th>Persona de Contacto</th>
              <th>Cotización</th>
              <th>Fecha de Cotización</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12345678-8</td>
              <td>Pedro Perez</td>
              <td>Servicio de Plomeria</td>
              <td>Pedro Perez</td>
              <td>2.000.000 BsS</td>
              <td>12/03/2020</td>
            </tr>
            <tr>
              <td>77777777-7</td>
              <td>Maria Ascensores</td>
              <td>Reparación de Ascensores</td>
              <td>Maria Gimenez</td>
              <td>10.000.00 BsS</td>
              <td>13/04/2020</td>
            </tr>
            <tr>
              <td>99999999-9</td>
              <td>Tanos Inc</td>
              <td>Servicio de Jardineria</td>
              <td>Miguel Martinez</td>
              <td>1.500.000 BsS</td>
              <td>12/02/2020</td>
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

</body>

</html>