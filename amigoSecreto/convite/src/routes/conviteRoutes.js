const express = require('express');
const { enviarConviteEmail } = require('../controllers/conviteController');

const router = express.Router();

router.post('/convite', enviarConviteEmail);

module.exports = router;
