document.onload = carga();

function carga() {
	//validacion de usuario
	document.getElementById('usuario').maxLength = 20;

	document.getElementById('usuario').onkeypress = function (e) {
		er = /^[a-z-_.]*$/
		validarkeypress(er, e)
	}

	document.getElementById('usuario').onfocus = function () {
		document.getElementById('susuario').innerText = "El usuario debe tener todas las letras en minuscula y solo puede contener los caracteres especiales \".\", \"-\" y \"_\"";
	};

	document.getElementById('usuario').onblur = function () {
		document.getElementById('susuario').innerText = "";
	};

	document.getElementById('usuario').onkeyup = function () {
		er = /^[a-z]{1,24}$/;
		r = validarkeyup(er, this, document.getElementById('susuario'), "El usuario debe tener todas las letras en minuscula y solo puede contener los caracteres especiales \".\", \"-\" y \"_\"");
	}

	//validacion de cedula
	document.getElementById('cedula').maxLength = 12;

	document.getElementById('cedula').onkeypress = function (e) {
		er = /^[0-9VE.-]*$/;
		validarkeypress(er, e);
	};

	document.getElementById('cedula').onfocus = function () {
		document.getElementById('scedula').innerText = "Ejemplo: V-19.999.999";
	};

	document.getElementById('cedula').onblur = function () {
		document.getElementById('scedula').innerText = "";
	};

	document.getElementById('cedula').onkeyup = function () {
		er = /^[VE][-][0-9]{1,2}[.][0-9]{3}[.][0-9]{3}$/;
		r = validarkeyup(er, this, document.getElementById('scedula'), "Ejemplo: V-19.999.999");
	};

	//validacion de clave
	document.getElementById('clave').maxLength = 20;

	document.getElementById('clave').onkeypress = function (e) {
		er = /^[0-9a-zA-Zñ\.\-_\*/\+\!\()\$&]*$/;
		validarkeypress(er, e);
	};

	document.getElementById('clave').onfocus = function () {
		document.getElementById('sclave').innerText = "La clave debe contener al menos un numero, una letra en mayuscula, una letra en minuscula y un caracter especial \"!\", \"$\",\"&\", \"*\", \"/\", \"_\", \"-\", \"+\", \".\", \"(\" ó \")\"";
	};

	document.getElementById('clave').onblur = function () {
		document.getElementById('sclave').innerText = "";
	};

	document.getElementById('clave').onkeyup = function () {
		er = /^(?=.*[0-9])(?=.*[A-ZÑ])(?=.*[\.\-_\*/\+\!\()\$&])[0-9a-zA-ZñÑ\.\-_\*/\+\!\()\$&]{8,20}$/;
		r = validarkeyup(er, this, document.getElementById('sclave'), "La clave debe contener al menos un numero, una letra en mayuscula, una letra en minuscula y un caracter especial \"!\", \"$\",\"&\", \"*\", \"/\", \"-\", \"+\", \".\", \"(\" ó \")\"");
	};

	//validacion de correo
	document.getElementById('correo').maxLength = 35;

	document.getElementById('correo').onkeypress = function (e) {
		er = /^[a-zA-Z0-9.-_@\u00f1\u00d1\u00E0-\u00FC]*$/;
		validarkeypress(er, e);
	};

	document.getElementById('correo').onfocus = function () {
		document.getElementById('scorreo').innerText = "El correo deve tener un formato valido";
	};

	document.getElementById('correo').onblur = function () {
		document.getElementById('scorreo').innerText = "";
	};

	document.getElementById('correo').onkeyup = function () {
		er = /^[a-zA-Z0-9.-_\u00f1\u00d1\u00E0-\u00FC]{3,20}[@][A-Za-z]{3,10}[.][A-Za-z]{2,3}$/;
		r = validarkeyup(er, this, document.getElementById('scorreo'), "El correo deve tener un formato valido");
	}

	//validacion de telefono
	document.getElementById('telefono').maxLength = 14;

	document.getElementById('telefono').onkeypress = function (e) {
		er = /^[0-9-]*$/;
		validarkeypress(er, e);
	};

	document.getElementById('telefono').onfocus = function () {
		document.getElementById('stelefono').innerText = "Ejemplo: 0414-205-33-44";
	};

	document.getElementById('telefono').onblur = function () {
		document.getElementById('stelefono').innerText = "";
	};

	document.getElementById('telefono').onkeyup = function () {
		er = /^[0-9]{4}[-][0-9]{3}[-][0-9]{2}[-][0-9]{2}$/;
		r = validarkeyup(er, this, document.getElementById('stelefono'), "Ejemplo: 0414-205-33-44");
	}

	//validacion de direccion
	document.getElementById('direccion').onkeypress = function (e) {
		er = /^[0-9a-zA-ZñÑ\s\-\.\_]*$/;
		validarkeypress(er, e);
	};

	document.getElementById('direccion').onfocus = function () {
		document.getElementById('sdireccion').innerText = "La direccion es ovligatoria debe contener solo numeros, letras y los caracteres \"-\", \"_\" y \".\"";
	};

	document.getElementById('direccion').onblur = function () {
		document.getElementById('sdireccion').innerText = "";
	};

	document.getElementById('direccion').onkeyup = function () {
		er = /^[0-9a-zA-ZñÑ\s\-\.\_]+$/;
		r = validarkeyup(er, this, document.getElementById('sdireccion'), "La direccion es ovligatoria debe contener solo numeros, letras y los caracteres \"-\", \"_\" y \".\"");
	}

	document.getElementById('incluir').onclick = function () {
		a = valida_campos();
		if (a != '') {
			$("#contenidodemodal").html(a);
			$("#mostrarmodal").modal("show");
			setTimeout(function () {
				$("#mostrarmodal").modal("hide");
			}, 4000);
		} else {
			var datos = new FormData();
			datos.append('accion', 'incluir');
			datos.append('cedula', $('#cedula').val());			
			datos.append('usuario', $('#usuario').val());			
			datos.append('clave', $('#clave').val());			
			datos.append('correo', $('#correo').val());			
			datos.append('telefono', $('#telefono').val());			
			datos.append('direccion', $('#direccion').val());
			envioAjax(datos);
			limpia();			
		}
	}

	document.getElementById('modificar').onclick = function () {
		a = valida_campos();
		if (a != '') {
			$("#contenidodemodal").html(a);
			$("#mostrarmodal").modal("show");
			setTimeout(function () {
				$("#mostrarmodal").modal("hide");
			}, 4000);
		} else {
			var datos = new FormData();
			datos.append('accion', 'modificar');
			datos.append('cedula', $('#cedula').val());			
			datos.append('usuario', $('#usuario').val());			
			datos.append('clave', $('#clave').val());			
			datos.append('correo', $('#correo').val());			
			datos.append('telefono', $('#telefono').val());			
			datos.append('direccion', $('#direccion').val());
			envioAjax(datos);
			limpia();			
    }
    
  }
  

	document.getElementById('eliminar').onclick = function () {
		er = /^[VE][-][0-9]{1,2}[.][0-9]{3}[.][0-9]{3}$/;
		r = validarkeyup(er, document.getElementById('cedula'), document.getElementById('scedula'), "Ejemplo: V-19.999.999");
		if (r == 0) {
			$("#contenidodemodal").html("Ejemplo: V-19.999.999");
			$("#mostrarmodal").modal("show");
			setTimeout(function () {
				$("#mostrarmodal").modal("hide");
			}, 4000);
		}
		else {			
			var datos = new FormData();
			datos.append('accion', 'eliminar');
			datos.append('cedula', $('#cedula').val());
			datos.append('usuario', $('#usuario').val());
			datos.append('clave', $('#clave').val());
			datos.append('correo', $('#correo').val());
			datos.append('telefono', $('#telefono').val());
			datos.append('direccion', $('#direccion').val());
			envioAjax(datos);
			limpia();
		}
  }
  
  document.getElementById('consultar').onclick = function () {
    var datos = new FormData();
    datos.append('accion', 'consultar');
    consultaAjax(datos);
    
  }
}

function consultaAjax(datos) {
  $.ajax({
    async: true,
    url: '', //la pagina a donde se envia por estar en mvc, se omite la ruta ya que siempre estaremos en la misma pagina
    type: 'POST',//tipo de envio 
    contentType: false,
    data: datos,
    processData: false,
    cache: false,
    success: function (respuesta) {//si resulto exitosa la transmision
      $("#cuerpoconsulta").html(respuesta);
      $("#modal1").modal("show");
    },
    error: function () {
      $("#contenidodemodal").html('Error con ajax');
      $("#mostrarmodal").modal("show");
      setTimeout(function () {
        $("#mostrarmodal").modal("hide");
      }, 4000);
    }

  });
}


function envioAjax(datos) {
	$.ajax({
		async: true,
		url: '', //la pagina a donde se envia por estar en mvc, se omite la ruta ya que siempre estaremos en la misma pagina
		type: 'POST',//tipo de envio 
		contentType: false,
		data: datos,
		processData: false,
		cache: false,
		success: function (respuesta) {//si resulto exitosa la transmision
			$("#contenidodemodal").html(respuesta);
			$("#mostrarmodal").modal("show");
			setTimeout(function () {
				$("#mostrarmodal").modal("hide");
			}, 4000);
		},
		error: function () {
			$("#contenidodemodal").html('Error con ajax');
			$("#mostrarmodal").modal("show");
			setTimeout(function () {
				$("#mostrarmodal").modal("hide");
			}, 4000);
		}

	});

}

function limpia() {
	$("#cedula").val('');
	$("#usuario").val('');
	$("#clave").val('');
	$("#telefono").val('');
	$("#direccion").val('');
	$("#correo").val('');
}

function valida_campos() {
	var error = ''

	//para cedula
	er = /^[VE][-][0-9]{1,2}[.][0-9]{3}[.][0-9]{3}$/;
	r = validarkeyup(er, document.getElementById('cedula'), document.getElementById('scedula'), "Ejemplo: V-19.999.999");
	if (r == 0) {
		error = "Ejemplo: V-19.999.999";
		return error;
	}

	//para usuarios
	er = /^[a-z]{1,24}$/;
	r = validarkeyup(er, document.getElementById('usuario'), document.getElementById('susuario'), "El usuario debe tener todas las letras en minuscula y solo puede contener los caracteres especiales \".\", \"-\" y \"_\"");
	if (r == 0) {
		error = "El usuario debe tener todas las letras en minuscula y solo puede contener los caracteres especiales \".\", \"-\" y \"_\"";
		return error;
	}

	//para clave
	er = /^(?=.*[0-9])(?=.*[A-ZÑ])(?=.*[\.\-_\*/\+\!\()\$&])[0-9a-zA-ZñÑ\.\-_\*/\+\!\()\$&]{8,20}$/;
	r = validarkeyup(er, document.getElementById('clave'), document.getElementById('sclave'), "La clave debe contener al menos un numero, una letra en mayuscula, una letra en minuscula y un caracter especial \"!\", \"$\",\"&\", \"*\", \"/\", \"-\", \"+\", \".\", \"(\" ó \")\"");
	if (r == 0) {
		error = "La clave debe contener al menos un numero, una letra en mayuscula, una letra en minuscula y un caracter especial \"!\", \"$\",\"&\", \"*\", \"/\", \"-\", \"+\", \".\", \"(\" ó \")\"";
		return error;
	}

	return error;
}

function validarkeypress(er, e) {
	//key obtiene el codigo ascii
	//del evento recuerde que
	key = e.keyCode || e.which;

	//luego se transforma el codigo ascii
	//en un caracter
	tecla = String.fromCharCode(key);

	//se procede a comparar con
	//la expresion regular usando la funcion test
	a = er.test(tecla);

	if (!a) {
		//si no coincide, se elimna la
		//pulsacion del teclado usando
		//prevent default
		e.preventDefault();
	}
}

function validarkeyup(er, etiqueta, etiquetamensaje,
	mensaje) {
	a = er.test(etiqueta.value);
	if (a) {
		etiquetamensaje.innerText = "";
		return 1;
	}
	else {
		etiquetamensaje.innerText = mensaje;
		return 0;
	}
}