const express = require('express');
const clienteControlador = require('./controllers/clienteControlador');
const mecanicoControlador = require('./controllers/mecanicoControlador');

const router = express.Router();
// Router Cliente
router.post('/clientes', clienteControlador.crearCliente);
router.get('/clientes/buscarPorNit/:nit', clienteControlador.buscarClientePorNit);
router.get('/clientes/buscarPorId/:idCliente', clienteControlador.buscarClientePorId);
router.get('/clientes/buscarPorCorreo/:correo', clienteControlador.buscarClientePorCorreo);
router.put('/clientes/actualizar/:idCliente', clienteControlador.actualizarCliente);
router.delete('/clientes/eliminar/:idCliente', clienteControlador.eliminarCliente);
// Router Mecánico
router.post('/mecanicos', mecanicoControlador.crearMecanico);
router.get('/mecanicos/buscarPorNit/:nit', mecanicoControlador.buscarMecanicoPorId);
router.get('/mecanicos/buscarPorId/:idMecanico', mecanicoControlador.buscarMecanicoPorId);
router.get('/mecanicos/buscarPorCorreo/:correo', mecanicoControlador.buscarMecanicoPorCorreo);
router.put('/mecanicos/actualizar/:idMecanico', mecanicoControlador.actualizarMecanico);
router.delete('/mecanicos/eliminar/:idMecanico', mecanicoControlador.eliminarMecanico);
// Router Adnministrador
router.post('/administrador', mecanicoControlador.crearMecanico);
router.get('/administrador/buscarPorNit/:nit', mecanicoControlador.buscarMecanicoPorId);
router.get('/administrador/buscarPorId/:idAdmin', mecanicoControlador.buscarMecanicoPorId);
router.get('/administrador/buscarPorCorreo/:correo', mecanicoControlador.buscarMecanicoPorCorreo);
router.put('/administrador/actualizar/:idAdmin', mecanicoControlador.actualizarMecanico);
router.delete('/administrador/eliminar/:idAdmin', mecanicoControlador.eliminarMecanico);

module.exports = router;