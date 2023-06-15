import express from 'express'

const router= express.Router();

let food =[
    {name: "Pera",price:"100"},
    {name: "Manzana",price:"100"},
    {name: "Mango",price:"100"},
]

router.get('/',(req,res)=>{
    let usuario ={
        name: "Veronica",
        rol:"admin"
    }
    res.render('index',{
        user: usuario,
        style:'index.css',
        isAdmin:usuario.rol ==="admin",food
    })
})

export default router;
