const fs = require('fs')
const operacionesAsincronas = async() =>{
    await fs.promises.writeFile('./ejemploPromise.txt',"Hola estamos creando este archivo desde promesas")
    let resultado= await fs.promises.readFile('./ejemploPromise.txt','utf-8')
    console.log(resultado)    
    await fs.promises.appendFile('./ejemploPromise.txt',' Ahora queremos adicionar mas info')
    await fs.promises.unlink('./ejemploPromise.txt')
}

operacionesAsincronas();