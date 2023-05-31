const fs = require("fs");

fs.writeFile(
  "./nuestroPrimerArchivo.txt",
  "hola coders bienvenidos",
  (error) => {
    if (error) return console.log("Error al escribir el archivo");
    fs.appendFile("./nuestroPrimerArchivo.txt", "  mas contenido", (error) => {
      if (error) return console.log("Error al actualizar el archivo");
      fs.readFile("./nuestroPrimerArchivo.txt", "utf-8", (error, resultado) => {
        if (error) return console.log("Error al leer el archivo");
        console.log(resultado);
        fs.unlink("./nuestroPrimerArchivo.txt", (error) => {
          if (error) return console.log("Error al eliminar el archivo");
        });
      });
    });
  }
);
/*
if(fs.existsSync('./nuestroPrimerArchivo.txt')){
    fs.appendFileSync('./nuestroPrimerArchivo.txt','Mas contenido')
    let contenido =fs.readFileSync('./nuestroPrimerArchivo.txt','utf-8')
    console.log(contenido);
    fs.unlinkSync('./nuestroPrimerArchivo.txt')
    
}*/
