const objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
]

let nuevoArray=[];

objetos.forEach(objeto=>{
    const valores =Object.keys(objeto)
    valores.forEach(valor=>{
        if(!nuevoArray.includes(valor)) nuevoArray.push(valor)
    })
})
console.log(nuevoArray)

