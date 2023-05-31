const fs =require('fs')

fs.writeFileSync('./ejemplo.txt',"Contenido")
if(fs.existsSync('./ejemplo.txt')){
    let contenido =fs.readFileSync('./ejemplo.txt','utf-8')

    fs.appendFileSync('./ejemplo.txt','insertar mas info')

    contenido.readFileSync('')

    fs.unlinkSync('./ejemplo.txt')
}
