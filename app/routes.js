const express = require('express');
const clienteControlador = require('./controllers/clienteControlador');

const router = express.Router();

router.post('/clientes', clienteControlador.crearCliente);

module.exports = router;