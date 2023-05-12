class Contador{
    constructor(responsable){
        this.responsable=responsable;
        this.conteo=0;
    }

    static contadorGlobal=0;

    getResponsable =()=>{
        return this.responsable
    }
    getCuentaIndividual =()=>{
        return this.conteo
    }
    getCuentaGlobal =()=>{
        return Contador.contadorGlobal;
    }
    contar=()=>{
        this.conteo++;
    }
}

const contador1 = new Contador('Coders')
contador1.contar();
contador1.contar();

const contador2 = new Contador('House')

console.log("Estos son los datos del contador 1 : "+contador1.getCuentaIndividual())
console.log("Estos son los datos del contador 2 : "+contador2.getCuentaGlobal())

