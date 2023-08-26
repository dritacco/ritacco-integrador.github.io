// validaciones para contacto.html
// Autor: Dario Ritacco

//variables para validar el formulario de contacto
const names = document.getElementById('name');
const mail = document.getElementById('email');
const mesaages = document.getElementById('message');
const errors = document.getElementById('error');


//validacion de formulario
form.addEventListener('submit', e=> {
    e.preventDefault();
    let error = "";
    let inside = false;
    let regexName = /^[a-z ,.'-]+$/i;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    errors.innerHTML = "";

//valido el formato de nombre
    if (!regexName.test(names.value)){
        error += ' > Nombre invalido';
        inside = true;
    }
//valido el formato de mail
    if (!regexEmail.test(mail.value)) {
        error += ' > Mail invalido';
        inside = true;
    }
//valido que el mensaje no este vacio
    if (mesaages.value.length <= 0) {
        error += ' > Mensaje vacio';
        inside = true;
    }
//si hay algun error, lo muestro en pantalla
    if (inside) {
        errors.style.color = "red";
        errors.innerHTML = error;
    }
//si no hay errores, muestro mensaje de enviado
     else {
        //texto en color verde
        errors.innerHTML = "Mensaje enviado";
        errors.style.color = "green";
    }
});