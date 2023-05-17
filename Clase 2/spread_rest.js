
let objeto={
    propiedad1:2,
    propiedad2:"A",
    propiedad3: true
}
let objeto1={
    propiedad5:"BaB",
    propiedad6:[1,2,3]
}

let {propiedad1,propiedad2}=objeto

let objeto3= {...objeto,...objeto1}

console.log(objeto3)

let objeto4={
    a:1,
    b:2,
    c:3,
    d:4,
    e:5
}
let{c,d,...rest}= objeto4
let objeto5 =rest
console.log(objeto5) //   c d e

