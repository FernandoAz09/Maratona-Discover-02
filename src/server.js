const express = require("express")
const server = express()
const routes = require("./routes")

//TEMPLATE ENGINE
server.set('view engine', 'ejs')

// Habilitar arquivos estáticos
server.use(express.static("public"))

// Rotas
server.use(routes)



// Servidor ouvindo a porta 3000 
server.listen(3000, () => console.log("Servidor RODANDO"))