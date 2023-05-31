const fs =require('fs')
const trabjarJson =async ()=>{
    const archivo = await fs.promises.readFile('./package.json','utf-8');

    const constenidoObj =JSON.parse(archivo)

    const archivocompleto={
        archivo,
        constenidoObj
    }

    console.log(archivocompleto);
    await fs.promises.writeFile('./informacion.json',JSON.stringify(archivocompleto,null,'\t'))
}

trabjarJson();