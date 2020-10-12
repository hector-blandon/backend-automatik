const express = require('express');
const clienteControlador = require('./controllers/clienteControlador');

const router = express.Router();

router.post('/clientes', clienteControlador.crearCliente);
router.get('/clientes/buscarPorNit/:nit', clienteControlador.buscarClientePorNit);
router.get('/clientes/buscarPorId/:idCliente', clienteControlador.buscarClientePorId);
router.get('/clientes/buscarPorCorreo/:correo', clienteControlador.buscarClientePorCorreo);
router.put('/clientes/actualizar/:idCliente', clienteControlador.actualizarCliente);
router.delete('/clientes/eliminar/:idCliente', clienteControlador.eliminarCliente);

module.exports = router;