const express = require('express')
const app = express()

// middlewares
app.use(express.json())

// rotas
const pessoa = require('./router/pessoas')
app.use(pessoa)


app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})