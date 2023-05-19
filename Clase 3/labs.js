const suma =(numero1,numero2)=>{
    return new Promise((resolve,reject)=>{
        if(numero1 ===0 || numero2 ===0) reject('Operacion Innnecesaria')
        if ((numero1 +numero2) <0)reject('La calculadora solo debe devolver valores positivos')
        resolve(numero1+numero2)
    })
}

const resta =(numero1,numero2)=>{  
    return new Promise((resolve,reject)=>{
        if(numero1 ===0 || numero2 ===0) reject('Operacion Innnecesaria')
        if ((numero1 - numero2) <0)reject('La calculadora solo debe devolver valores positivos')
        resolve(numero1-numero2)
    })
}

const multiplicar =(numero1,numero2)=>{
    return new Promise((resolve,reject)=>{
        if(numero1 ===0 || numero2 ===0) reject('Operacion Innnecesaria')
        if ((numero1 * numero2) <0)reject('La calculadora solo debe devolver valores positivos')
        resolve(numero1*numero2)
    })
}
const division  =(numero1,numero2)=>{
    return new Promise((resolve,reject)=>{
        if(numero2 ===0) reject('No se puede dividir entre 0')
        resolve(numero1/numero2)
    })
}

const calculos =async()=>{
    try{
        let numero1=1
        let numero2=2
        let resultadoSuma =await suma(numero1,numero2);
        console.log( `La operacion entre ${numero1}  y  ${numero2}                       
                      fue ${resultadoSuma}`)

        let resultadoResta =await resta(numero1,numero2);
        console.log( `La operacion entre ${numero1}  y  ${numero2}                       
                     fue ${resultadoResta}`)

        let resultadoMultiplicacion =await multiplicar(numero1,numero2);
        console.log( `La operacion entre ${numero1}  y  ${numero2}                       
                    fue ${resultadoMultiplicacion}`)
        
        let resultadoDivision =await division(numero1,numero2);
        console.log( `La operacion entre ${numero1}  y  ${numero2}                       
                            fue ${resultadoDivision}`)
    }catch(error){
    console.log(error)
    }
}

calculos();