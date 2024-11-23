import { Router } from "express";

const router = Router ()

let juegos = []

router.get('/',(req,res)=>{ 
    res.send(juegos)
})
router.get('/',(req,res)=>{ 
    
    let juego = req.body

    const numero = Math.random(Math.floor()*200 + 1)
    juego.id= numero + juego.length 

    if( !juego.nombre || juego.genero){
        return res.status(404).send("debes enviar todos los datos")
    }
    juego.push(juego)
    res.send({status :"success", msg:"juego creado"})


})











export default router