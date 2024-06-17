const express = require('express');
const { adicionarItem, removerItem, mostrarItens } = require('../controllers/desejosController');

const router = express.Router();

router.post('/desejos', adicionarItem);
router.delete('/desejos', removerItem);
router.get('/desejos', mostrarItens);

module.exports = router;
