import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Voce esta na pagina principal get")
})

app.post('/', (req, res) => {
    res.send("Voce esta na pagina principal post")
}) 

app.listen(3333, () => {
    console.log("Servidor rodando na porta https://localhost:3333")
})