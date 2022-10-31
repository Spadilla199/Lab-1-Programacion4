require('dotenv').config()
const express = require('express')
const app = express()


app.get('/', function(req, res){
res.send('Hello World')
})



app.listen(process.env.PORT,()=>{
    console.log("El puerto esta corriendo el puerto TCP" + process.env.PORT)

})

//El error consiste que no esta instalado el modulo express es por eso que el codigo hace referencia a un error 