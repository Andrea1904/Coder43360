let contador = () =>{
    let contador =1;
    console.log("Realizando operacion")
    let tiempo =setInterval (()=>{
        console.log(contador++)
        if(contador>5){
            clearInterval(tiempo); // despues de q cuente lo ejecuta en este caso 5
        }
    },1000)
}

/*al ser un intervalo el console se ejecutará 
cada 1000 milisegundos (1 segundo) */

console.log("inicio tarea");
contador();
console.log("Finalizo tarea")