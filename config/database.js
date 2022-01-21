// Arquivo de configuração do mongoose

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


//conectar o bd da máquina ao app

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.log(err))
