//root do projeto
const express = require('express');
const path = require('path')
const checklistRouter = require('./src/routes/checklist')
const taskRouter = require('./src/routes/task')

const rootRouter = require('./src/routes/index')
const method = require('method-override');
const methodOverride = require('method-override');

require('./config/database')


const app = express();

//Middlewar (deixa o json disponível no req)
app.use(express.json());

//Middleawr para requisições via formulário
app.use(express.urlencoded({extended: true}))

app.use(methodOverride('_method', {methods: ['POST', 'GET']}))

//arquivos estaticos ficam neste pasta
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use('/', rootRouter)
app.use('/checklists', checklistRouter)
app.use('/checklists', taskRouter.checklistDependent)
app.use('/tasks', taskRouter.simple);



app.listen(3000, () => {
    console.log('Servidor iniciado')
});

//servidor provisorio para monitorar os arquivos