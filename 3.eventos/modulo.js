export const esValido=(e)=>{

    const objeto=new Object();
    e.preventDefault()
    // console.log(e.target.children);
    const campos=[...e.target].filter((elemento)=>{
        return elemento.hasAttribute('required')
    })

    const radios=[...e.target].filter((elemento)=>{
        return elemento.type==='radio'
    })
    const campo_radio= radios.find( (radio)=> radio.checked)|| [];

    console.log(campo_radio);

    if (campo_radio.length === 0) {
        objeto.radios[0].name = "";
    }else{
        objeto[campo_radio.name]=campo_radio.value;
    }

    const checkbox=[...campos].filter((elemento) => elemento.type==='checkbox');
    

    const campo_checkbox=checkbox.filter((e) => e.checked);
    console.log(campo_checkbox);

    if (campo_checkbox.length<3) {
        objeto[checkbox[0].name]="";
    }else{
        console.log([...campo_checkbox]);
        
    }
    


    
    //recorremos los elementos
    campos.forEach(campo =>{
            switch (campo.tagName) {    
            case "INPUT":
                if (campo.type==='text') {
                    
                }
                console.log(campo.type);  
                if (campo.value.trim()==="") {
                    campo.classList.add("error")
                    objeto[campo.name]=campo.type;
                }
                break;
            case "SELECT":
                console.log(campo.type);
                if (campo.selectedIndex==0) {
                    campo.classList.add("error")
                    objeto[campo.name]=campo.type;  
                }
                break;

            default:
                break;
        }
        })
        console.log(objeto);
        
    }


