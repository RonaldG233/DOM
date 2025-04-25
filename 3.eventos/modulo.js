export const validar=(e)=>{

    e.preventDefault()
    // console.log(e.target.children);
    const campos=[...e.target].filter((elemento)=>{
        return elemento.hasAttribute('required')
    })
    //recorremos los elementos
    campos.forEach(campo =>{
        console.log(campo);
        if (campo.value==="") {
            campo.classList.add("error")
        }
        

        switch (campo.tagName) {
            case "INPUT":
                console.log(campo.type);
                
                break;
            case "SELECT":
                console.log(campo.type);
                    
        
            default:
                break;
        }
        if (campo.value==="") {
            campo.classList.add("error")
        }
        
    })
   // console.log(campo.selectedIndex);
}

