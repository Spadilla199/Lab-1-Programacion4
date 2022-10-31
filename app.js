require('dotenv').config()
const Server = require('./models/server')
const server = new Server()
server.listen();


//El error consiste que no esta instalado el modulo express es por eso que el codigo hace referencia a un error 