import express  from "express";
import __dirname from "./utils.js";

import viewRouter from './routes/views.router.js'
import coursesRouter from './routes/courses.router.js'
import usersRouter from './routes/users.router.js'
import handlebars from 'express-handlebars'

import mongoose from "mongoose";

const app =express();
const PORT=8080;

mongoose.set('strictQuery',false)
const connection= mongoose.connect('mongodb+srv://CoderUser:A123456*@pruebacoder.rpvqwdz.mongodb.net/?retryWrites=true&w=majority');

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views')
app.set('view engine','handlebars')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',viewRouter)
app.use('/api/courses',coursesRouter)
app.use('/api/users',usersRouter)

const server =app.listen(PORT,()=>console.log("Server Arriba"))