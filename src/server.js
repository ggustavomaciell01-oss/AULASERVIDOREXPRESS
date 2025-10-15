import express from "express";
import { Database } from "./databases.js";

const app = express();
app.use(express.json())

const database = new Database()

app.get('/', (req, res) => {
    res.send("Voce esta na pagina principal get")
})



app.get('/', (req, res) => {
    const data = database.select("usuario")
    res.status(200).json()
})

app.post('/usuario', (req, res) => {
    const {nome, idade, email} = req.body
    if (nome, idade, email){
        database.insert('usuario')
        usuarios.push({nome, idade, email})
        res.status(201).send("Usuario Criado")
    }

    return res.status(400).send("informações invalidas")
    
}) 

app.listen(3333, () => {
    console.log("Servidor rodando na porta https://localhost:3333")
})