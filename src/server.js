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
    const {nome, idade} = req.body
    usuarios.push({nome, idade})
    console.log(usuarios)

    res.status(201).send("Usuario Criado")

    res.send("Voce esta na pagina principal post")
}) 

app.listen(3333, () => {
    console.log("Servidor rodando na porta https://localhost:3333")
})