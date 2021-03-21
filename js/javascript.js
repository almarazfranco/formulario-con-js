// alert('Funciona perfecto, capo!');

(function(){
  // VAR DE FORMULARIO
var formulario = document.getElementById('formulario'),
nombre = formulario.nombre,
correo = formulario.correo,
sexo = formulario.sexo,
terminos = formulario.terminos;
errores = document.getElementById('errores');


// VALIDACION DE NOMBRE
function validarNombre(e){
if(nombre.value == '' || nombre.value == null){
console.log('Pone tu nombre capo');
errores.style.display = 'block';
errores.innerHTML = errores.innerHTML + '<li>Por favor ingresa tu nombre.</li>'
e.preventDefault();
}
}

// VALIDACION DE CORREO
function validarCorreo(e){
if(correo.value == '' || correo.value == null){
console.log('Pone tu correo capo');
errores.style.display = 'block';
errores.innerHTML = errores.innerHTML + '<li>Por favor ingresa tu correo.</li>'
e.preventDefault();
}
}

// VALIDACION DE SEXO
function validarSexo(e){
if(sexo.value == '' || sexo.value == null){
console.log('Selecciona un sexo capo');
errores.style.display = 'block';
errores.innerHTML = errores.innerHTML + '<li>Por favor selecciona un sexo.</li>';
e.preventDefault();
}
}

// VALIDACION DE TERMINOS
function validarTerminos(e){
if(terminos.checked == false){
console.log('Aceptá los términos y condiciones capo');
errores.style.display = 'block';
errores.innerHTML = errores.innerHTML + '<li>Por favor acepta los términos y condiciones.</li>';
e.preventDefault();
}
}

// VALIDACION DE FORMULARIO
function validarFormulario(e){
errores.innerHTML = '';

validarNombre(e);
validarCorreo(e);
validarSexo(e);
validarTerminos(e);
}
formulario.addEventListener('submit', validarFormulario);
}())