const dividir =(dividiendo,divisor)=>{

    return new Promise((resolve,reject) =>{
        if(divisor === 0){
            reject('no se puede dividir')
        }else{
            resolve(dividiendo/divisor)
        }
    })
}
let resultado= dividir(5,0);
//console.log(resultado)

dividir(6,0)
.then(resultado=>{
    console.log("El resultado de la div fue :"+resultado)
})
.catch(error=>{
    console.log("El error fue :" +error)
})
