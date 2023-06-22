import express from 'express';
import __dirname from '../src/utils.js';
import handlebars from 'express-handlebars';
import viewRouter from './routes/view.router.js';
import {Server} from 'socket.io';

const app= express();
const httpServer=app.listen(8080,()=>console.log("Server arriba"));
const socketserver= new Server(httpServer);

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');
app.use(express.static(__dirname + '/public'));
app.use('/',viewRouter);

socketserver.on('connection',socket=>{
    console.log("Tenemos un cliente conectado");

    socket.on('message', data=>{
        console.log(data)
    })
})

// on =escuchar /rcibir
// emit=hablar /enviar


