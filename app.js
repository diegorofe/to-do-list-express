//root do projeto
const express = require('express');
const checklistRouter = require('./src/routes/checklist')
const app = express();

//Middlewar (deixa o json disponível no req)
app.use(express.json());

app.use('/checklists',checklistRouter)


app.listen(3000, () => {
    console.log('Servidor iniciado')
});

//servidor provisorio para monitorar os arquivos