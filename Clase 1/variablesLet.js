let nombre;
let i=0;


function foo(){
    i=1;
    let j=2;
    if(true){
        console.log(i);
        console.log(j)
    }
}

console.log("i por fuera de la funcion "+i);
//console.log("j por fuera de la funcion "+j)

foo();