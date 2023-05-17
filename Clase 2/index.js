let tipo="calculos"

async function probarCalculos(){
    if(tipo==="calculos"){
        const {default:operaciones} = await import ('./operaciones.js')
        let calculo = new operaciones();
      
    }
}

