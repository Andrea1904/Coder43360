const sumar =(numero1,numero2)=>numero1+numero2;
const restar=(numero1,numero2)=>numero1-numero2;
const multiplicar=(numero1,numero2)=>numero1*numero2;
const dividir=(numero1,numero2)=>numero1/numero2;

const realizarOperacion =(numero1,numero2,callback)=>{
    console.log("Operaciones !!!")
    let resultado =callback(numero1,numero2)
    /*console.log( "El numero 1: "+ numero1 + "operacion" + 
                 "El numero 2 "+numero2+ " Con la operacion "+
                 callback
    )*/
    console.log(`El resultado de  ${numero1} + ${numero2} = ${resultado}`)
    console.log("El resultado :"+ resultado)
}

realizarOperacion(2,5,sumar)