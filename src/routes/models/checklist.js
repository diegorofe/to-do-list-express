const mongoose = require('mongoose');

//modelo de estrutura de dados
const checklistSchema = mongoose.Schema({
    name: {type: String, required: true},
    tasks: [{
    type: mongoose.Schema.Types.ObjectID,        
    ref: 'Task'}]
})

module.exports = mongoose.model('Checklist', checklistSchema);