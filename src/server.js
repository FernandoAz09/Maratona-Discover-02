const express = require("express")
const server = express()



//request(req) //response(res)
server.get('/', (req,res) => {
    return res.sendFile(__dirname + "/views/index.html")
})





server.listen(3000, () => console.log("Servidor RODANDO"))