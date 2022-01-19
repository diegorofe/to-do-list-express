const express = require('express');
const res = require('express/lib/response');

const router = express.Router();

router.get('/checklists', (req, res) => {
    console.log('Olá');
    res.send();

})

router.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body)
})

router.get('/:id', (req, res) => {
    console.log(req.params);
    res.send(`ID: ${req.params.id}`)
})

module.exports = router;