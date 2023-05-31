const temporizador =(callback)=>{
    setTimeout(()=>{
        callback();
    },5000)
}

let operacion= ()=>console.log("Realizando operacion")

console.log("Inicio el proceso")
temporizador(operacion);
console.log("Finalizo la tarea")