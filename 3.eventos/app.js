const formulario=document.querySelector('form');
const nombre=document.querySelector('[name=nombre]');
const apellido=document.querySelector('[name=apellido]');
const telefono=document.querySelector('[name=telefono]');
const documento=document.querySelector('[name=documento]');
const usuario=document.querySelector('[name=usuario]');
const contrasena=document.querySelector('[name=contrasena]');

// const btn =document.querySelector('#btn_validar');

if (nombre.value == "") {
    alert('Completar campo de nombre')
    nombre.focus();
}

formulario.addEventListener('submit', validar);