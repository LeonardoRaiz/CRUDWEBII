
const express = require('express');
const server = express();
server.use(express.json());

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({extended: false}))

let nomes = ['Bruce', 'Clark', 'Barry', 'Dianna'];
//#region CRUD
//CRUD CREATE, READ, UPDATE, DELETE
//Vamos fazer o CREATE
server.post('/nomes', (req, res) => {
    const { name }  = req.body; // Pegar o valor
    nomes.push(name); // Incrementar o array
    return res.json(nomes); // Mostra se deu certo
})


//Fizemos o READ
//Mostrar um único valor
server.get('/nomes/:index', (req, res) => {
    const { index } = req.params;
    return res.json(nomes[index]);
})
//Mostrar vários valores
server.get('/nomes', (req, res) => {
    return res.json(nomes);
})

//Vamos criar o UPDATE
server.put('/nomes/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    nomes[index] = name
    return res.json(nomes)
})

server.delete('/nomes/:index', (req, res) => {
    const { index } = req.params

    nomes.splice(index, 1);
    return res.json(nomes)
})
//#endregion
//#region Desafio
server.get('/desafio/:index', (req, res) => {
    const { index } = req.params;
    return res.send(
        `<!DOCTYPE html>
        <body style="text-align: center">
            <h1>Desafio!</h1>
            <h1>Bem vindo! <b style="color: red"> ${nomes[index]} </b></h1>
            <p> Parabens, primeira conexão entre back e front</p>
        </body>
        </html>
        `
    )
})

//#endregion
server.listen(8080);