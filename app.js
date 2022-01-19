//root do projeto
const express = require('express');

const app = express();

//Middlewar (deixa o json disponível no req)
app.use(express.json());

//retorna dados json da requisição
const log = (req, res, next) => {
    console.log(req.body);
    console.log(`Data: ${Date.now()}`)
    next();
}

//usando Middlewares
app.use(log);

app.get('/', (req, res) => {
    res.send('<h1>Minha lista de tarefas Mágicas</h1>')
});

app.get('/json', (req, res) => {
   res.json({title: 'Tarefa X', done: true}) 
})

app.listen(3000, () => {
    console.log('Servidor iniciado')
});

//servidor provisorio para monitorar os arquivos