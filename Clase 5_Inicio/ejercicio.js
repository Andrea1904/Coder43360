const numeros={};

for( let i=0 ;i<10000; i++){
    let numero = Math.floor(Math.random()*20+1);
    if(!numeros[numero]) numeros[numero]=1;
    else numeros[numero]++;
}
console.log(numeros)