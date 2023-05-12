class Persona{
    constructor(nombre){
        this.nombre=nombre;
    }
    static especie ="humanos"

    saludar=()=>{
        console.log(`Hola como estas? ${this.nombre}`)
    }

    consultarEspecie=()=>{
        console.log(`Estamos llenos de super ${Persona.especie}`)
    }
    ofertaLaboral=()=>{
        console.log(`Estoy interesado en la oferta`)
    }
}

let persona1= new Persona("Rocky");

persona1.saludar();
persona1.consultarEspecie();
persona1.ofertaLaboral();