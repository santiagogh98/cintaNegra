const express=require('express')
const{}=require('./API/recursos/tareas/tareas.rutas')

const app=express();

const PORT = 3000

app.use(express.json())

app.use('/tareas',)


module.exports={app,PORT}