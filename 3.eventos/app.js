// const btn =document.querySelector('#btn_validar');
const formulario=document.querySelector('form');
const nombre=document.querySelector('[name="nombre"]');
const apellido=document.querySelector('[name="apellido"]');
const telefono=document.querySelector('[name="telefono"]');
const documento=document.querySelector('[name="documento"]');
const usuario=document.querySelector('[name="usuario"]');
const contrasena=document.querySelector('[name="contrasena"]');

const validar=(event) => {
    if (nombre.value == "") {
      alert("completar campo de nombre");
      nombre.focus();
      event.preventDefault();
    }else if(apellido.value==""){
      alert("completar campo de apellido");
      apellido.focus();
      event.preventDefault();
    }else if(telefono.value==""){
      alert("completar el campo del telefono");
      telefono.focus();
      event.preventDefault();
    }else if(documento.value==""){
      alert("ingrese su documento respesctivamente");
      documento.focus();
      event.preventDefault();
    }else if(usuario.value==""){
      alert("ingrese su usuario respectivamente");
      usuario.focus();
      event.preventDefault();
    }else if(contrasena.value==""){
      alert("ingrese su contraseña respectivamente");
      contrasena.focus();
      event.preventDefault();
    }
  }
  
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
  
  //Eventos
  formulario.addEventListener('submit',validar);
  nombre.addEventListener('keydown',validar_let);
  apellido.addEventListener('keydown',validar_let);
  telefono.addEventListener('keydown',validar_num);
  documento.addEventListener('keydown',validar_num);