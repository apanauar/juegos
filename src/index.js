import express from "express"
import userRoutes from "./routes/user.routes.js"
import juegosRoutes from "./routes/juegos.routes.js"
import _dirname from "./utils.js";

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(_dirname +'/public'))
console.log(_dirname);


const PORT = 9090
app.listen(PORT, () => {
    console.log(PORT);
    
})

app.get('/ping', (req,res)=>{
    res.send("pinga")
})
app.use('/user', userRoutes)
app.use('/juegos', juegosRoutes)