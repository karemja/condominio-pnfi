document.onload = carga()

function carga() {
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

	//validacion de nombre
	document.getElementById('nombre').maxLength = 25;

	document.getElementById('nombre').onkeypress = function (e) {
		er = /^[a-zA-ZñÑ\s]*$/;
		validarkeypress(er, e);
	};

	document.getElementById('nombre').onfocus = function () {
		document.getElementById('snombre').innerText = "El nombre debe comenzar en mayúscula";
	};

	document.getElementById('nombre').onblur = function () {
		document.getElementById('snombre').innerText = "";
	};

	document.getElementById('nombre').onkeyup = function () {
		er = /^[A-ZÑ][a-zñ]{1,24}$/;
		r = validarkeyup(er, this, document.getElementById('snombre'), "El nombre debe comenzar en mayúscula");
	}

	//validacion de apellido
	document.getElementById('apellido').maxLength = 25;

	document.getElementById('apellido').onkeypress = function (e) {
		er = /^[a-zA-ZñÑ\s]*$/;
		validarkeypress(er, e);
	};

	document.getElementById('apellido').onfocus = function () {
		document.getElementById('sapellido').innerText = "El apellido debe comenzar en mayúscula";
	};

	document.getElementById('apellido').onblur = function () {
		document.getElementById('sapellido').innerText = "";
	};

	document.getElementById('apellido').onkeyup = function () {
		er = /^[A-ZÑ][a-zñ]{1,24}$/;
		r = validarkeyup(er, this, document.getElementById('sapellido'), "El apellido debe comenzar en mayúscula");
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

	//validacion de cargo 
	document.getElementById('cargo').maxLength = 35;

	document.getElementById('cargo').onkeypress = function (e) {
		er = /^[a-zA-Z]*$/;
		validarkeypress(er, e);
	};

	document.getElementById('cargo').onfocus = function () {
		document.getElementById('scargo').innerText = "El cargo es obligatorio deve contener solo letras";
	};

	document.getElementById('cargo').onblur = function () {
		document.getElementById('scargo').innerText = "";
	};

	document.getElementById('cargo').onkeyup = function () {
		er = /^[a-zA-Z]{1,}$/;
		r = validarkeyup(er, this, document.getElementById('scargo'), "El cargo es obligatorio deve contener solo letras");
	}

	//validacion de fecha de ingreso 
	document.getElementById('fecha_ingreso').maxLength = 35;

	document.getElementById('fecha_ingreso').onkeypress = function (e) {
		er = /^[0-9]*$/;
		validarkeypress(er, e);
	};

	document.getElementById('fecha_ingreso').onfocus = function () {
		document.getElementById('sfecha_ingreso').innerText = "La fecha de ingreso es obligatoria";
	};

	document.getElementById('fecha_ingreso').onblur = function () {
		document.getElementById('sfecha_ingreso').innerText = "";
	};

	document.getElementById('fecha_ingreso').onkeyup = function () {
		er = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;
		r = validarkeyup(er, this, document.getElementById('sfecha_ingreso'), "La fecha de ingreso es obligatoria");
	}

	//validacion de salario 
	document.getElementById('salario').maxLength = 35;

	document.getElementById('salario').onkeypress = function (e) {
		er = /^[0-9BsS.,\s]*$/;
		validarkeypress(er, e);
	};

	document.getElementById('salario').onfocus = function () {
		document.getElementById('ssalario').innerText = "Ejemplo: BsS 1.000.000,00";
	};

	document.getElementById('salario').onblur = function () {
		document.getElementById('ssalario').innerText = "";
	};

	document.getElementById('salario').onkeyup = function () {
		er = /^([B][s][S][\s][0-9]{1,3}[.][0-9]{3}[.][0-9]{3}[,][0-9]{2})|([BsS][0-9]{1,3}[.][0-9]{3}[,][0-9]{2})$/;
		r = validarkeyup(er, this, document.getElementById('ssalario'), "Ejemplo: BsS 1.000.000,00");
	}

	//validacion de hora de entrada
	document.getElementById('hora_entrada').maxLength = 35;

	document.getElementById('hora_entrada').onkeypress = function (e) {
		er = /^[0-9ap]*$/;
		validarkeypress(er, e);
	};

	document.getElementById('hora_entrada').onfocus = function () {
		document.getElementById('shora_entrada').innerText = "La hora de entrada es obligatoria";
	};

	document.getElementById('hora_entrada').onblur = function () {
		document.getElementById('shora_entrada').innerText = "";
	};

	document.getElementById('hora_entrada').onkeyup = function () {
		er = /^[0-9]{2}[:][0-9]{2}$/;
		r = validarkeyup(er, this, document.getElementById('shora_entrada'), "La hora de entrada es obligatoria");
	}

	//validacion de hora de salida
	document.getElementById('hora_salida').maxLength = 35;

	document.getElementById('hora_salida').onkeypress = function (e) {
		er = /^[0-9ap]*$/;
		validarkeypress(er, e);
	};

	document.getElementById('hora_salida').onfocus = function () {
		document.getElementById('shora_salida').innerText = "La hora de entrada es obligatoria";
	};

	document.getElementById('hora_salida').onblur = function () {
		document.getElementById('shora_salida').innerText = "";
	};

	document.getElementById('hora_salida').onkeyup = function () {
		er = /^[0-9]{2}[:][0-9]{2}$/;
		r = validarkeyup(er, this, document.getElementById('shora_salida'), "La hora de entrada es obligatoria");
	}

	//validacion de hora de salida
	document.getElementById('hora_salida').maxLength = 35;

	document.getElementById('hora_salida').onkeypress = function (e) {
		er = /^[0-9ap]*$/;
		validarkeypress(er, e);
	};

	document.getElementById('hora_salida').onfocus = function () {
		document.getElementById('shora_salida').innerText = "La hora de entrada es obligatoria";
	};

	document.getElementById('hora_salida').onblur = function () {
		document.getElementById('shora_salida').innerText = "";
	};

	document.getElementById('hora_salida').onkeyup = function () {
		er = /^[0-9]{2}[:][0-9]{2}$/;
		r = validarkeyup(er, this, document.getElementById('shora_salida'), "La hora de entrada es obligatoria");
	}

	document.getElementById('incluir').onclick = function () {
		a = valida_datos();
		if (a != '') {
			$("#contenidodemodal").html(a);
			$("#mostrarmodal").modal("show");
			setTimeout(function () {
				$("#mostrarmodal").modal("hide");
			}, 4000);
		}
		else {
			var datos = new FormData();
			datos.append('accion', 'incluir');
			datos.append('cedula', $("#cedula").val());
			datos.append('nombre', $("#nombre").val());
			datos.append('apellido', $("#apellido").val());
			datos.append('telefono', $("#telefono").val());
			datos.append('direccion', $("#direccion").val());
			datos.append('correo', $("#correo").val());
			datos.append('cargo', $("#cargo").val());
			datos.append('fecha_ingreso', $('#fecha_ingreso').val());
			datos.append('salario', $('#salario').val());
			datos.append('hora_entrada', $('#hora_entrada').val());
			datos.append('hora_salida', $('#hora_salida').val());
			envioAjax(datos);
			limpia();
		}

	}


	document.getElementById('modificar').onclick = function () {
		a = valida_datos();
		if (a != '') {
			$("#contenidodemodal").html(a);
			$("#mostrarmodal").modal("show");
			setTimeout(function () {
				$("#mostrarmodal").modal("hide");
			}, 4000);
		}
		else {
			var datos = new FormData();
			datos.append('accion', 'modificar');
			datos.append('cedula', $("#cedula").val());
			datos.append('nombre', $("#nombre").val());
			datos.append('apellido', $("#apellido").val());
			datos.append('telefono', $("#telefono").val());
			datos.append('direccion', $("#direccion").val());
			datos.append('correo', $("#correo").val());
			datos.append('cargo', $("#cargo").val());
			datos.append('fecha_ingreso', $('#fecha_ingreso').val());
			datos.append('salario', $('#salario').val());
			datos.append('hora_entrada', $('#hora_entrada').val());
			datos.append('hora_salida', $('#hora_salida').val());
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
			datos.append('nombre', $('#nombre').val());
			datos.append('apellido', $('#apellido').val());
			datos.append('telefono', $('#telefono').val());
			datos.append('correo', $('correo').val());
			datos.append('direccion', $('direccion').val());
			datos.append('salario', $('salario').val());
      datos.append('cargo', $('cargo').val());
			datos.append('fecha_ingreso', $('fecha_ingreso').val());
			datos.append('hora_entrada', $('hora_entrada').val());
			datos.append('hora_salida', $('hora_salida').val());
      
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
	$("#nombre").val('');
	$("#apellido").val('');
	$("#telefono").val('');
	$("#direccion").val('');
	$("#correo").val('');
	$("#cargo").val('');
	$('#fecha_ingreso').val('');
	$('#salario').val('');
	$('#hora_entrada').val('');
	$('#hora_salida').val('');
}

function valida_datos() {
	error = '';

	//para cedula
	er = /^[VE][-][0-9]{1,2}[.][0-9]{3}[.][0-9]{3}$/;
	r = validarkeyup(er, document.getElementById('cedula'), document.getElementById('scedula'), "Ejemplo: V-19.999.999");
	if (r == 0) {
		error = "Ejemplo: V-19.999.999";
		return error;
	}

	//para apellido
	er = /^[A-ZÑ][a-zñ]{1,24}$/;
	r = validarkeyup(er, document.getElementById('apellido'), document.getElementById('sapellido'), "El apellido debe comenzar en mayúscula");
	if (r == 0) {
		error = "El apellido debe comenzar en mayúscula";
		return error;
	}

	//para nombre
	er = /^[A-ZÑ][a-zñ]{1,24}$/;
	r = validarkeyup(er, document.getElementById('nombre'), document.getElementById('snombre'), "El nombre debe comenzar en mayúscula");
	if (r == 0) {
		error = "El nombre debe comenzar en mayúscula";
		return error;
	}

	//para telefono 
	er = /^[0-9]{4}[-][0-9]{3}[-][0-9]{2}[-][0-9]{2}$/;
	r = validarkeyup(er, document.getElementById('telefono'), document.getElementById('stelefono'), "Ejemplo: 0414-205-33-44");
	if (r == 0) {
		error = "Ejemplo: 0414-205-33-44";
		return error;
	}
	//para direccion 
	er = /^[0-9a-zA-ZñÑ\s\-\.\_]+$/;
	r = validarkeyup(er, document.getElementById('direccion'), document.getElementById('sdireccion'), "La direccion es ovligatoria debe contener solo numeros, letras y los caracteres \"-\", \"_\" y \".\"");
	if (r == 0) {
		error = "La direccion es ovligatoria debe contener solo numeros, letras y los caracteres \"-\", \"_\" y \".\"";
		return error;
	}

	//para correo 
	er = /^[a-zA-Z0-9.-_\u00f1\u00d1\u00E0-\u00FC]{3,20}[@][A-Za-z]{3,10}[.][A-Za-z]{2,3}$/;
	r = validarkeyup(er, document.getElementById('correo'), document.getElementById('scorreo'), "El correo deve tener un formato valido");
	if (r == 0) {
		error = "El correo deve tener un formato valido";
		return error;
	}

	//para cargo
	er = /^[a-zA-Z]{1,}$/;
	r = validarkeyup(er, document.getElementById('cargo'), document.getElementById('scargo'), "El cargo es obligatorio deve contener solo letras");
	if (r == 0) {
		error = "El cargo es obligatorio deve contener solo letras";
	}
	//para fecha de ingreso
	er = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;
	r = validarkeyup(er, document.getElementById('fecha_ingreso'), document.getElementById('sfecha_ingreso'), "La fecha de ingreso es obligatoria");
	if (r == 0) {
		error = "La fecha de ingreso es obligatoria";
		return error;
	}
	//para salario
	er = /^([B][s][S][\s][0-9]{1,3}[.][0-9]{3}[.][0-9]{3}[,][0-9]{2})|([BsS][0-9]{1,3}[.][0-9]{3}[,][0-9]{2})$/;
	r = validarkeyup(er, document.getElementById('salario'), document.getElementById('ssalario'), "Ejemplo: BsS 1.000.000,00");
	if (r == 0) {
		error = "Ejemplo: BsS 1.000.000,00";
		return error;
	}
	//para hora de entrada
	er = /^[0-9]{2}[:][0-9]{2}$/;
	r = validarkeyup(er, document.getElementById('hora_entrada'), document.getElementById('shora_entrada'), "La hora de entrada es obligatoria");
	if (r == 0) {
		error = "La hora de entrada es obligatoria";
		return error;
	}

	//para hora de salida
	er = /^[0-9]{2}[:][0-9]{2}$/;
	r = validarkeyup(er, document.getElementById('hora_salida'), document.getElementById('shora_salida'), "La hora de entrada es obligatoria");
	if (r == 0) {
		error = "La hora de salida es obligatoria";
		return error;
	}

	return error;
}

function validarkeypress(er, e) {
	key = e.keyCode || e.which;

	tecla = String.fromCharCode(key);

	a = er.test(tecla);

	if (!a) {
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