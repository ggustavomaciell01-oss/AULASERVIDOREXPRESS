import express from "express";

const app = express();
app.use(express.json())

const usuarios = []

app.get('/', (req, res) => {
    res.send("Voce esta na pagina principal get")
})

app.get('/', (req, res) => {
    res.status(200).json(usuarios)
})

app.post('/usuario', (req, res) => {
    const {nome, idade, email} = req.body
    if(nome, idade, email){
        usuarios.push({nome, idade})
        return res.status(201).send("Usuario Criado")


    }

    return res.status(400).send("Informacoes invalidas")

    res.send("Voce esta na pagina principal post")
}) 

app.listen(3333, () => {
    console.log("Servidor rodando na porta https://localhost:3333")
})