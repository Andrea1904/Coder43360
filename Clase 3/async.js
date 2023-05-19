const dividir =(dividiendo,divisor)=>{

    return new Promise((resolve,reject) =>{
        if(divisor === 0){
            reject('no se puede dividir')
        }else{
            resolve(dividiendo/divisor)
        }
    })
}

const funcionAsincrona =async()=>{
    try{
        let resultado = await dividir(6,2)
        console.log(resultado)
    }catch(error){
        console.log(error)
    }
}

funcionAsincrona();

