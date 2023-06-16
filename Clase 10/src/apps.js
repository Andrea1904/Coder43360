import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewRouter from "./routes/views.router.js"
import { Server } from 'socket.io'

const app =express();
const httpserver =app.listen(8080,()=>console.log("Server arriba"))

const socketServer =new Server(httpserver)

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views')
app.set('view engine','handlebars');
app.use(express.static(__dirname+'/public'))
app.use('/',viewRouter)

const logs = []
socketServer.on('connection',socket =>{
    console.log("Inicio la comunicación")

        socket.on("message",data=>{
        logs.push({socketid:socket.id,message:data})
        socketServer.emit('log',{logs});
    })
})

/*
socketServer.on('connection',socket=>{
    console.log("Nuevo cliente")

    socket.on('message',data=>{
        console.log(data)
    })

    socket.emit('evento_para_socket',"mensaje para que lo reciba el socket")
})*/


/*
socketSever.on //escuchar-recibir 
socketSever.emit //hablar - enviar
*/
