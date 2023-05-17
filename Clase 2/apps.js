// exponencial ES7
/* 
let valor = [1,2,3,4,5];
let valoresNuevos=valor.map((numero,indice)=>numero**indice);
console.log(valoresNuevos)

// 1 ** 0    2 ** 1  3**2    4**3
// include ES7
let nombres = ['maria', 'carlos','yolanda']
if(nombres.includes('maria_l')){
    console.log('El nombre de maria ya existe')
}else{
    console.log('Nombre no fue encontrado')
}

*/

// null

let impuestos=[{ impuesto1: 1,
    impuesto2: 3,
    impuesto3: 4}];

let valorLlave =Object.entries(impuestos)
console.log(valorLlave)

let propiedades =Object.keys(impuestos)
console.log(propiedades)