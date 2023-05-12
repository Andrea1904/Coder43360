/*function sumaDosNumeros(valor1,valor2){
    let suma;
    suma=valor1+valor2
    return suma;
}
let total= sumaDosNumeros(1,2);
console.log(total)

const sumarDosNumeros=(valor1,valor2) =>{
    let suma;
    suma = valor1+valor2
    return suma;
}
const sumaCompleto = (valor1,valor2)=> valor1+valor2;
*/

////
const i= "variable global - scope"
function declaracionVariables(){
    const i =" variable local dentro de la funcion"
    console.log(i)
}
declaracionVariables();
console.log(i)

const j="valor global para ejemplo de alcance "
function ejemploDeAlcance(){
    console.log(j)
}
ejemploDeAlcance();
console.log(j)


