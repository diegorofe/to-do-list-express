const mongoose = require('mongoose');

//modelo de estrutura de dados
const taskSchema = mongoose.Schema({
    name: {type: String, required: true},
    done: {type: Boolean, default: false},
    checklist: {type: mongoose.Types.ObjectId, 
    ref: 'Checklist',
    required: true}
})

module.exports = mongoose.model('Task', checklistSchema);