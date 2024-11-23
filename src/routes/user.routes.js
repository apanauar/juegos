import { Router } from "express";

const router = Router ()


let users = []

router.get('/api/users', (req,res) =>[
    res.send(users)
])


router.post('/', (req,res)=>{
    let user = req.body

    const numeroRandom = Math.floor(Math.random() * 200 + 1)
    user.id = numeroRandom + users.length
    
    
    if ( !user.first_name || !user.last_name || !user.email || !user.password){
        return res.status(404).send("debes enviar datos")
    }
    users.push(users)
    res.send("usuario creado")
} )

router.put('/:userId', (req,res) =>{
    let userId = parseInt(req.params.userId)
    let userUpdate = req.body
    const userPosition = users.findIndex(user => user.id === userId)

    if ( userPosition < 0){
        return res.status(404).send("usuario no encontrado")
    }
    user[userPosition]= userUpdate
    res.send({status:"Success", msg:"usuario eliminado"})
})

router.delete('/:userId', (req,res)=>{
    let userId = parseInt(req.params.userId)
    const userPosition = users.findIndex(user => user.id === userId)

    if ( userPosition < 0){
        return res.status(404).send("usuario no encontrado")
    }
    users.splice(userPosition,1)
    res.send({status:"Success", msg:"usuario eliminado"})
})







export default router