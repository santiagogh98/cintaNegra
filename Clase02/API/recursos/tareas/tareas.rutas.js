const express=require('express')
const tareasRutas=express.Router()

let tareas=[]


tareasRutas.get('/',(req,res)=>{
    res.status(200).json({tareas:tareas})
})

tareasRutas.post('./',(res,req)=>{
    const tarea=req.body
    tareas.push(tarea)
    res.status(201),json({response:'Tarea creada'})
})
module.exports={tareasRutas}
