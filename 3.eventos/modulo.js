export const validar = (event) => {
    event.preventDefault();
    console.log(event.target.children);
  
    const campos = [...event.target].filter((elemento) => {
      if (elemento.hasAttribute('required')) {
        return elemento;
      }
    })
  
    let info = {};
  
    campos.forEach(campo => {
      let tipo = campo.tagName;
  
      switch (tipo) {
        case "INPUT":
          if (campo.value == "") {
            campo.classList.add("border-red");
            if (campo.nextElementSibling) campo.nextElementSibling.remove();
            let afterend = document.createElement('span');
            afterend.textContent = "Este campo no puede estar vacio"
            campo.insertAdjacentElement('afterend', afterend);
          }
          else {
            let nombre = campo.getAttribute('name')
            info[nombre] = campo.value;
          }
          break;
        
        case "SELECT":
          if (campo.selectedIndex == 0) {
            campo.classList.add("border-red");
            if (campo.nextElementSibling) campo.nextElementSibling.remove();
            let afterend = document.createElement('span');
            afterend.textContent = "Debe seleccionar un elemento"
            campo.insertAdjacentElement('afterend', afterend);
          } else {
            let nombre = campo.getAttribute('name')
            info[nombre] = campo.value;
          }
          break;
      
        default:
          
      }
    })
    
    const radios = [...campos].filter((campo) => campo.type == "radio");
  
    const radios_seleccionados = radios.find((radio) => radio.checked) || [];
  
    if (radios_seleccionados.length == 0) {
      info[radios[0].name] = "";
    } else info[radios_seleccionados.name] = radios_seleccionados.value;
  
  
  
    const checboxs = [...campos].filter((campo) => campo.type == "checkbox");
    const checboxs_seleccionados = checboxs.filter((checbox) => checbox.checked)
    if (checboxs_seleccionados.length < 3) {
      info[checboxs[0].name] = "";
    } else {
      info[checboxs[0].name] = [...checboxs_seleccionados].map((elemento) => elemento.value);
    }
  
    console.log(info);
    
  }


