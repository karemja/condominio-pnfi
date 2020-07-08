//document, es el documento html donde se esta trabajando
//onload evento que ocurre al cargar la pagina
//carga funcion que se crea para ejecutar las acciones al 
//momento de que se cargue la pagina
document.onload = carga();

function carga() {

	//colocaremos la maxima cantidad de caracteres permitidos
	document.getElementById('piso').maxLength = 2;
	//Primero validaremos las entradas de teclado para 
	//impedir que se ingresen caracteres no validos
	//getElementById, atributo que sirve para identificar
	//una etiqueta html por el id
	//onkeypress evento que ocurre al pulsar una tecla dentro de 
	//la etiqueta
	//function(e) funcion anonima, se llama anonima porque no tiene nombre
	//e es el parametro que recibe el caracter de la tecla pulsada
	//este bloque va a validar las teclas que se pulsan sobre
	//la etiqueta piso
	document.getElementById('piso').onkeypress = function (e) {
		//es, es una variable que tiene asignada una expresion regular
		//una expresion regular son una serie de valores con con los que se
		//pueden comparar datos de entradas
		//su sintaxis es la siguiente
		//    /^ caracteres de apertura
		//    [] lugar donde se colcon los caracteres que se desea permitir
		//    *$/ carateres de cierre de la expresion regular
		// En el ejemplo de abajo vemos que permitiremos los numeros del 0 al 9 0-9
		// Las letras P B y H mayuscaulas para colocar PB y PH y en caracter backspace \b
		er = /^[0-9PBH\b]*$/;

		//Llamada a la función validarkeypress, explicada mas abajo
		validarkeypress(er, e);

	};

	//Segundo paso, colocar un mensaje en el span asociado a la etiqueta indicandole al usuario
	//los caracteres permitidos, esto ocurrira al momento de que la etiequeta reciba el foco
	//evento onfocus
	//Note que en este caso la funcion anonima ya no tiene paramatros, esto es porque ese
	//evento onfocus, no recibe entradas de usuario
	document.getElementById('piso').onfocus = function () {
		//ahora buscaremos el span asociando a la etiqueta y colocaremos en el
		//un mensaje
		document.getElementById('spiso').innerText = "Solo numeros menores a 99 o las letras" +
			"PB o PH Los numeros menores a 10 debe ir 01, 02 etc";
	};

	//Tercer paso, eliminar el mensaje que se coloco en paso 2 una vez que se salga de la etiequeta
	//note que en este caso el evento cambia a onblur, que se ejecuta cuando esa etiqueta pierde el foco
	document.getElementById('piso').onblur = function () {
		document.getElementById('spiso').innerText = "";
	};

	//Cuarto paso, validar la entrada una vez que aparesca el caracter
	//la diferencia con paso 1, es que paso 1 impide que aparesca el caracter
	//aca se valida que la combinacion de caracteres coincida con la entrada deseada
	//para ello utilizaresmos en evento keyup que se desencadena una vez se suelte una
	//tecla presionada
	document.getElementById('piso').onkeyup = function () {
		//primero validaremos que la entrada sea PB o PH
		//Note que para este caso se cambia el *$/ por $/ debido a que se toma la cadena completa
		//el otro simbolo que se agrega es | esto significa or, es decir, o se cumple una o la otra
		//el otro cambio es {} esto indica la longitud de la cadena en este caso comienza en 1 y debe tener 2 caracteres
		er = /^[P][B]{1,2}|[P][H]{1,2}|[0-9][0-9]{1,2}$/;
		r = validarkeyup(er, this, document.getElementById('spiso'), "Solo numeros menores a" +
			" 99 o las letras PB o PH Los numeros menores a 10 debe ir 01, 02 etc");
	}


	//validacion de torre
	document.getElementById('torre').maxLength = 7;

	document.getElementById('torre').onkeypress = function (e) {
		er = /^[a-zA-Z0-9\s]*$/;
		validarkeypress(er, e);
	};

	document.getElementById('torre').onfocus = function () {

		document.getElementById('storre').innerText = "Ejemplo: Arca 25";
	};

	document.getElementById('torre').onblur = function () {
		document.getElementById('storre').innerText = "";
	};

	document.getElementById('torre').onkeyup = function () {
		er = /^[A][r][c][a][\s][0-9]{1,2}$/;
		r = validarkeyup(er, this, document.getElementById('storre'), "Ejemplo: Arca 25");
	}

	//validacion de numero
	document.getElementById('numero').maxLength = 2;

	document.getElementById('numero').onkeypress = function (e) {
		//\s=espacio en blanco
		er = /^[0-9]*$/;


		validarkeypress(er, e);

	};


	document.getElementById('numero').onfocus = function () {

		document.getElementById('snumero').innerText = "Numeros en formato 00";
	};


	document.getElementById('numero').onblur = function () {
		document.getElementById('snumero').innerText = "";
	};


	document.getElementById('numero').onkeyup = function () {
		er = /^[0-9]{2,2}$/;
		r = validarkeyup(er, this, document.getElementById('snumero'), "Numeros en formato 00");
	}

	//validacion de cedula
	document.getElementById('cedula').maxLength = 12;

	document.getElementById('cedula').onkeypress = function (e) {
		//\s=espacio en blanco
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
	}

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

	//En esta parte añadiremos el codigo necesario para validar antes de enviar
	//al servidor, anteriormente validamos las entradas, pero es necesario
	//verificar antes de enviar que a pesar de que se le dijo al usuario que hacer
	//este no haya pulsado 

	document.getElementById('incluir').onclick = function () {
		//lo primero que haremos es verificar que
		//pestaña esta activa, para ello usaremos esta linea
		//se traduce, busca la etiqueta contenedores 
		//$("#contenedores") despues que la encuentres busca la activa
		//.find("active") y luego que veas cual es la activa, dame su id
		//.attr('id')
		var a = $("#contenedores").find(".active").attr('id');

		//ok ahora que tenemos que pestaña esta activa vamos a realizar la ultima validacion
		//antes de enviar al servidor

		//les voy a hacer la de piso, queda de ustedes hacer las demas

		if (a == 'dptn') { //dptn es el id del tab en el html
			a = valida_dptn(); //ejecutamos la funcion valida_dptn y guardamos el valor en a-zA-Z0-9\s
		} else if (a == 'dpropietario') {
			a = valida_dpropietario();
		}
		if (a != '') {
			//si a tiene algun valor, indica que hubo error
			//y lo mostramos en un modal
			//recuerden que este modal fue añadido en el html 
			$("#contenidodemodal").html(a);

			$("#mostrarmodal").modal("show");

			setTimeout(function () {
				$("#mostrarmodal").modal("hide");

			}, 4000);
		}
	}
}

function valida_dptn() { //la funcion para validar la tab dptn
	//vamos a usar las mismas expresiones regulares que se usaron en el keyup
	//si todas estan bien enviamos, si no enviamos mensaje de error

	//primero asumiremos que todo esta bien
	//usaremos una variable bandera que se puede llamr como sea y la encederemos
	//en '', indicando que no hay error
	var error = '';

	//ahora validaremos cada input en ese tab 

	//para piso
	er = /^[P][B]{1,2}|[P][H]{1,2}|[0-9][0-9]{1,2}$/;
	r = validarkeyup(er, document.getElementById('piso'), document.getElementById('spiso'), "Solo numeros menores a" +
		" 99 o las letras PB o PH Los numeros menores a 10 debe ir 01, 02 etc");
	if (r == 0) { //r==0, indica que hubo error en la validacion de la etiqueta piso
		error = "ERROR EN PISO Solo numeros menores a" +
			" 99 o las letras PB o PH Los numeros menores a 10 debe ir 01, 02 etc";
		return error; //al colocar return aca, sale de la funcion y no ejecuta el resto	
	}

	//para la torre
	er = /^[A][r][c][a][\s][0-9]{1,2}$/;
	r = validarkeyup(er, document.getElementById('torre'), document.getElementById('storre'), "Ejemplo: Arca 25");
	if (r == 0) { //r==0, indica que hubo error en la validacion de la etiqueta piso
		error = "ERROR EN TORRE Ejemplo: Arca 25";
		return error; //al colocar return aca, sale de la funcion y no ejecuta el resto	
	}

	//para numero
	er = /^[0-9]{2,2}$/;
	r = validarkeyup(er, document.getElementById('numero'), document.getElementById('snumero'), "Numeros en formato 00");
	if (r == 0) {
		error = "Numeros en formato 00";
		return error;
	}


	return error;
}

function valida_dpropietario() {
	error = '';

	//para cedula
	er = /^[V][-][0-9]{1,2}[.][0-9]{3}[.][0-9]{3}$/ || /^[E][-][0-9]{1,2}[.][0-9]{3}[.][0-9]{3}$/;
	r = validarkeyup(er, document.getElementById('cedula'), document.getElementById('scedula'), "Ejemplo: V-19.999.999");
	if (r == 0) {
		error = "El formato de la cedula es invalido";
		return error;
	}
	//para nombre
	er = /^[A-ZÑ][a-zñ]{1,24}$/;
	r = validarkeyup(er, document.getElementById('nombre'), document.getElementById('snombre'), "El nombre debe comenzar en mayúscula");
	if (r == 0) {
		error = "El nombre debe comenzar en mayúscula";
		return error;
	}
	//para apellido
	er = /^[A-ZÑ][a-zñ]{1,24}$/;
	r = validarkeyup(er, document.getElementById('apellido'), document.getElementById('sapellido'), "El apellido debe comenzar en mayúscula");
	if (r == 0) {
		error = "El apellido debe comenzar en mayúscula";
		return error;
	}
	//para telefono
	er = /^[0-9]{4}[-][0-9]{3}[-][0-9]{2}[-][0-9]{2}$/;
	r = validarkeyup(er, document.getElementById('telefono'), document.getElementById('stelefono'), "Ejemplo: 0414-205-33-44");
	if (r == 0) {
		error = "Por favor verifica el teléno ingresado";
		return error;
	}
	//para correo
	er = /^[a-zA-Z0-9.-_\u00f1\u00d1\u00E0-\u00FC]{3,20}[@][A-Za-z]{3,10}[.][A-Za-z]{2,3}$/;
	r = validarkeyup(er, document.getElementById('correo'), document.getElementById('scorreo'), "El correo deve tener un formato valido");
	if (r == 0) {
		error = "El correo deve tener un formato valido";
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