const express = require('express')
const router = express.Router()

// lista mockada
let listaPessoas = [
    {
     id: 1,
    nome: "Jose",
    idade: 20,
    email: "jose@gmail.com",
    telefone: "61912010002"
   
},
{
id: 2,
nome: "Maria",
idade: 22,
email: "Maria@gmail.com",
telefone: "61932010002"
}
   
   
  
]

// READ -> Buscar todas as Pessoas
router.get('/pessoas', (req, res) => {
    res.json(listaPessoas)
})

// READ -> Buscar as Pessoas pelo ID
router.get('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)  
    const pessoa = listaPessoas[index]
    res.json(pessoa)
})

// CREATE -> Criar uma Pessoa
router.post('/pessoas', (req, res) => {
    const novaPessoa = req.body

    const pessoa = {
        id: listaPessoas.length + 1,
        nome: novaPessoa.nome,
        idade: novaPessoa.idade,
        email: novaPessoa.email,
        telefone: novaPessoa.telefone

    }

    listaPessoas.push(pessoa)

    res.json({ mensagem: "Pessoa cadastrada com sucesso!"})
})

// DELETE  -> Deletar uma Pessoa
router.delete('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)
    listaPessoas.splice(index, 1)
    res.json({ mensagem: "Pessoa excluida com sucesso"})
})

// UPDATE -> Alterar uma Pessoa
router.put('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const novaPessoa = req.body

    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)

    const pessoaAlterada = {
        id: id,
        nome: novaPessoa.nome,
        idade: novaPessoa.idade,
        email: novaPessoa.email,
        telefone: novaPessoa.telefone
    }

    listaPessoas[index] = pessoaAlterada

    res.json({ mensagem: "Pessoa alterada com sucesso!"})

})





module.exports = router