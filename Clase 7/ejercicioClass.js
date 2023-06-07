import express from "express"

const app =express();

const server =app.listen(8080,()=>console.log("Server arriba"))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

let frase = "Frase inicial";

app.get('/api/frase',(req,res)=>{
    res.send({frase});
})

app.get('/api/palabras/:pos',(req,res)=>{
    const pos = req.params.pos;
    const parseFrase = parseInt(pos);
    const palabras = frase.split(' ');

    if(parseFrase<=0||parseFrase>palabras.length) 
     return res.status(400).send({status:"error",error:"No se encontro la posicion"})
    res.send({palabra:palabras[parseFrase-1]});
})
//POST '/api/palabras': recibe un objeto con una palabra bajo el campo ‘palabra’ y la agrega al final de la frase. Devuelve un objeto que como campo ‘agregada’ contenga la palabra agregada, y en el campo ‘pos’ la posición en que se agregó dicha palabra.
app.post('/api/palabras',(req,res)=>{
    const palabra = req.body.palabra;
    console.log(palabra);
    frase = frase + ` ${palabra}`;
    res.send({palabra,pos:frase.split(' ').length});
})

//PUT '/api/palabras/:pos': recibe un objeto con una palabra bajo el campo ‘palabra’ y reemplaza en la frase aquella hallada en la posición dada. Devuelve un objeto que como campo ‘actualizada’ contenga la nueva palabra, y en el campo ‘anterior’ la anterior.
app.put('/api/palabras/:pos',(req,res)=>{
    const pos = req.params.pos;
    const palabra = req.body.palabra;
    const parseFrase = parseInt(pos);
    const palabras = frase.split(' ');
    if(parseFrase<=0||parseFrase>palabras.length) return res.status(400).send({status:"error",error:"Posición fuera del rango de la frase"})
    const anterior = palabras[parseFrase-1];
    palabras[parseFrase-1] = palabra;
    frase = palabras.join(' ');
    res.send({actualizada:palabra,anterior})
})
//DELETE '/api/palabras/:pos': elimina una palabra en la frase, según la posición dada (considerar que la primera palabra tiene posición #1).

app.delete('/api/palabras/:pos',(req,res)=>{
    const pos = req.params.pos;
    const parseFrase = parseInt(pos);
    const palabras = frase.split(' ');
    if(parseFrase<=0||parseFrase>palabras.length) return res.status(400).send({status:"error",error:"Posición fuera del rango de la frase"})
    const eliminar = palabras[parseFrase-1];
    palabras.splice(parseFrase-1,1);
    frase = palabras.join(' ');
    res.send({status:"success",eliminada:eliminar})
})
