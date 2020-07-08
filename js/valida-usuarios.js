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
		er = /^[A-Z][a-z]{1,24}$/;
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