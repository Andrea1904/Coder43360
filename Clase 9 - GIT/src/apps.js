import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewRouter from "./routes/views.router.js"

const app =express();

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views')
app.set('view engine','handlebars');
app.use(express.static(__dirname+'/public'))
app.use('/',viewRouter)





/*
const users = [
    {

        name: "Andrea",
        last_name:"Lopez",
        age:16,
        email: "andrea.lopez@correo.com",
        phone:"123456"
    },
    {
        name: "Maria",
        last_name:"Lopez",
        age:17,
        email: "andrea.lopez@correo.com",
        phone:"123456"
    },
    {
        name: "Carlos",
        last_name:"Lopez",
        age:18,
        email: "andrea.lopez@correo.com",
        phone:"123456"
    },
    {
        name: "Manuel",
        last_name:"Lopez",
        age:19,
        email: "andrea.lopez@correo.com",
        phone:"123456"
    },
    {
        name: "Teresa",
        last_name:"Lopez",
        age:20,
        email: "andrea.lopez@correo.com",
        phone:"123456"
    }
];


app.get('/usuarios',(req,res)=>{
    const random = Math.floor(Math.random() * users.length);
    res.render('index',{user:users[random]})
})

app.get('/prueba',(req,res)=>{
    let usuario ={
        name: "Veronica"
    }
    res.render('index',usuario)
})*/
const server =app.listen(8080,()=>console.log("Server arriba"))