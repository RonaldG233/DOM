// import esValido from "./modulo.js";
import { validar } from "./modulo.js";
// const btn =document.querySelector('#btn_validar');
const formulario=document.querySelector('form');
const nombre=document.querySelector('[name="nombre"]');
const apellido=document.querySelector('[name="apellido"]');
const telefono=document.querySelector('[name="telefono"]');
const documento=document.querySelector('[name="documento"]');
const usuario=document.querySelector('[name="usuario"]');
const contrasena=document.querySelector('[name="contrasena"]');
const politicas=document.querySelector("#politica");
const boton=document.querySelector("#btn_validar");


// const validar=(event) => {
//     if (nombre.value == "") {
//       if (nombre.nextElementSibling) {
//         nombre.nextElementSibling.remove();}

//       if (event.target.value.length>=10) {
//         event.preventDefault();
//       }  

//       nombre.style.border="2px solid red";
//       nombre.classList.add('error');
//       const span=document.createElement('span');
//       span.textContent= 'el campo de nombre es obligatorio';
      
//       nombre.insertAdjacentElement('afterend',span);
//       nombre.focus();
//       event.preventDefault(); 
      
//     } if(apellido.value==""){ 
//       if (apellido.nextElementSibling) {
//         apellido.nextElementSibling.remove();}

//       apellido.style.border="2px solid red";
//       apellido.classList.add('error');
//       const span=document.createElement('span');
//       span.textContent= 'el campo de apellido es obligatorio';
//       apellido.insertAdjacentElement('afterend',span);
//       apellido.focus();
//       event.preventDefault();
      
//     }if(telefono.value==""){
//       if (telefono.nextElementSibling) {
//       telefono.nextElementSibling.remove();}

//       telefono.style.border="2px solid red";
//       telefono.classList.add('error');
//       const span=document.createElement('span');
//       span.textContent= 'el campo de telefono es obligatorio';
//       telefono.insertAdjacentElement('afterend',span);
//       telefono.focus();
//       event.preventDefault();
      
//     } if(documento.value==""){
//       if (documento.nextElementSibling) {
//         documento.nextElementSibling.remove();}

//       documento.style.border="2px solid red";
//       documento.classList.add('error');
//       const span=document.createElement('span');
//       span.textContent= 'el campo de documento es obligatorio';
//       documento.insertAdjacentElement('afterend',span);
//       documento.focus();
//       event.preventDefault();
//     }if(usuario.value==""){
//       if (usuario.nextElementSibling) {
//         usuario.nextElementSibling.remove();}

//       usuario.style.border="2px solid red";
//       usuario.classList.add('error');
//       const span=document.createElement('span');
//       span.textContent= 'el campo de usuario es obligatorio';
//       usuario.insertAdjacentElement('afterend',span);
//       usuario.focus();
//       event.preventDefault();
//     }if(contrasena.value==""){

//       if (contrasena.nextElementSibling) {
//         contrasena.nextElementSibling.remove();}
//       contrasena.style.border="2px solid red";
//       contrasena.classList.add('error');
//       const span=document.createElement('span');
//       span.textContent= 'el campo de contraseña es obligatorio';
//       contrasena.insertAdjacentElement('afterend',span);
//       contrasena.focus();
//       event.preventDefault();
//     }
//   }
  
  const validar_let=(event)=>{
    let tecla=event.key;
    const letras=/[a-zñáéíóú\s]/i;
    if(!letras.test(tecla)){
      event.preventDefault();
    }
  }
  
  const validar_num=(event)=>{
    let tecla=event.key;
    const numeros=/[0-9]/; 
    
  
    if(!numeros.test(tecla) && tecla!="Backspace"){
      event.preventDefault();
    }
  }

  const limpiar=(event)=>{
    if (event.target.value !=="") {
      event.target.classList.remove("error");
      if (event.target.nextElementSibling) {
        event.target.nextElementSibling.remove();
      }
    }
  }

  const confirmado=()=>{
    if (!politicas.checked) {
      boton.setAttribute('disabled', '');
    }else{
      boton.removeAttribute('disabled');
    }
  }
  
  //Eventos
  addEventListener("DOMContentLoaded", confirmado);

  politicas.addEventListener('change',(confirmado));


  formulario.addEventListener('submit',validar);

  nombre.addEventListener('keydown',validar_let);
  apellido.addEventListener('keydown',validar_let);
  telefono.addEventListener('keydown',validar_num);
  documento.addEventListener('keydown',validar_num);
  nombre.addEventListener('blur',limpiar);
  apellido.addEventListener('blur',limpiar);
  telefono.addEventListener('blur',limpiar);
  documento.addEventListener('blur',limpiar);
  // export default esValido();

  