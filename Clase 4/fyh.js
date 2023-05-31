const fs = require('fs')

const fecha = new Date().toLocaleDateString();
const hora =new Date().toLocaleTimeString();

fs.writeFile('./fyh.txt',` Fecha: ${fecha}  Hora: ${hora}`,(error)=>{
    if(error) return console.log(error)
     fs.readFile('./fyh.txt','utf-8',(error,resultado)=>{
        if(error) return console.log(error)
        console.log(resultado)
     })
})