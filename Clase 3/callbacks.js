
let nuevosValores= valoresOriginales.map(x=>x+1) 
 2,3,4,5,6

//Array.map() te permite iterar sobre un arreglo y modificar sus elementos utilizando una función callback

let otrosValores =valoresOriginales.map(x=>x*2)
2,4,6,8,10

let masValores =valoresOriginales.map(x=>"a")
"a","a","a","a","a"


let valoresOriginales =[ 1,2,3,4,5]

const funcionCallback =(valor)=>{
    if(valor%2 ===0){
        return valor
    }else{
        return "No es par"
    }
}

const evaluacionPares= valoresOriginales.map(funcionCallback);
console.log(evaluacionPares)