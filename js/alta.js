// validaciones para alta.html
// Autor: Dario Ritacco


//variables para validar el formulario de alta
const nameV = document.getElementById('name');
const priceV = document.getElementById('price');
const stockV = document.getElementById('stock');
const brandV = document.getElementById('brand');
const categoryV = document.getElementById('category');
const sDescriptionV = document.getElementById('sDescription');
const lDescriptionV = document.getElementById('lDescription');
const ageFromV = document.getElementById('ageFrom');
const ageToV = document.getElementById('ageTo');
const boxPictureV = document.getElementById('boxPicture');
const errors = document.getElementById('error');


//validacion de formulario
form.addEventListener('submit', e=> {
    e.preventDefault();
    let error = "";
    let inside = false;
    let regexName = /^[a-z ,.'-]+$/i;
    errors.innerHTML = "";

//valido el formato de nombre
    if (!regexName.test(nameV.value)){
        error += ' > Nombre invalido';
        inside = true;
    }
//valido que el precio sea mayor o igual a cero
    if (priceV.value <= 0) {
        error += ' > Precio menor a cero';
        inside = true;
    }
//valido que el stock sea mayor o igual a cero
    if (stockV.value <= 0) {
        error += ' > Stock menor a cero';
        inside = true;
    }
    //valido que la marca no este nula
    if (brandV.value == "") {
        error += ' > Marca sin completar';
        inside = true;
    }
    //valido que la categoria no este nula
    if (categoryV.value == "") {
        error += ' > Categoria sin completar';
        inside = true;
    }
    //valido que la descripcion corta no este nula
    if (sDescriptionV.value == "") {
        error += ' > Descripcion corta sin completar';
        inside = true;
    }
    //valido que la descripcion larga no este nula
    if (lDescriptionV.value == "") {
        error += ' > Descripcion larga sin completar';
        inside = true;
    }
    //valido que la edad minima sea mayor o igual a cero
    if (ageFromV.value <= 0) {
        error += ' > Edad minima menor a cero';
        inside = true;
    }
    // valido que la edad hasta sea mayor a la edad minima
    if (ageToV.value > ageFromV.value) {
        error += ' > Edad maxima menor a la edad minima';
        inside = true;
    }
    //valido que el adjunto este cargado
    if (boxPictureV.value == "") {
        error += ' > Adjunto vacio';
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
        errors.innerHTML = "Producto Ingresado con Exito!";
        errors.style.color = "green";
    }
});