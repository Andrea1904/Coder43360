let valoresOriginales =[ 1,2,3,4,5]

const funcionMap=(arreglo,callback)=>{
    console.log("Entre")
    let nuevoArreglo=[];    
    for(let i=0;i<=arreglo.length; i++){
        let nuevoValor= callback(arreglo[i])
        nuevoArreglo.push(nuevoValor)
    }
    return nuevoArreglo;
}

let nuevoArregloPropio = funcionMap(valoresOriginales,x=>x*2)

let nuevoArregloMap = valoresOriginales.map(x=>x*2)

console.log("Funcion creada :"+ nuevoArregloPropio + "Funcion mapa :" +nuevoArregloMap)

Array.prototype.miPropiafuncionMap = function(callback){
    let nuevoArreglo =[];
    for( let i=0;i<this.length;i++){
        let nuevoValor =callback(this[i]);
        nuevoArreglo.push(nuevoValor)
    }
    return nuevoArreglo;
}
let arregloPrueba= [1,2,3,4,5];
let nuevosValores=arregloPrueba.miPropiafuncionMap(x=>x+1)
console.log(nuevosValores);