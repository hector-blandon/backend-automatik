const express = require('express');
const clienteControlador = require('./controllers/clienteControlador');
const mecanicoControlador = require('./controllers/mecanicoControlador');
const administradorControlador = require('./controllers/administradorControlador');
const piezaControlador = require('./controllers/piezaControlador');
const vehiculoControlador = require('./controllers/vehiculoControlador');

const router = express.Router();
// Router Cliente
router.post('/clientes', clienteControlador.crearCliente);
router.get('/clientes/buscarPorTaller/:idTaller', clienteControlador.buscarClientes);
router.get('/clientes/buscarPorNit/:nit', clienteControlador.buscarClientePorNit);
router.get('/clientes/buscarPorId/:idCliente', clienteControlador.buscarClientePorId);
router.get('/clientes/buscarPorCorreo/:correo', clienteControlador.buscarClientePorCorreo);
router.put('/clientes/actualizar/:idCliente', clienteControlador.actualizarCliente);
router.delete('/clientes/eliminar/:idCliente', clienteControlador.eliminarCliente);
// Router Mecánico
router.post('/mecanicos', mecanicoControlador.crearMecanico);
router.get('/mecanicos/buscarPorTaller/:idTaller', mecanicoControlador.buscarMecanicos);
router.get('/mecanicos/buscarPorNit/:nit', mecanicoControlador.buscarMecanicoPorNit);
router.get('/mecanicos/buscarPorId/:idMecanico', mecanicoControlador.buscarMecanicoPorId);
router.get('/mecanicos/buscarPorCorreo/:correo', mecanicoControlador.buscarMecanicoPorCorreo);
router.put('/mecanicos/actualizar/:idMecanico', mecanicoControlador.actualizarMecanico);
router.delete('/mecanicos/eliminar/:idMecanico', mecanicoControlador.eliminarMecanico);
// Router Adnministrador
router.post('/administrador', administradorControlador.crearAdministrador);
router.get('/administrador/buscarPorTaller/:idTaller', administradorControlador.buscarAdministradores);
router.get('/administrador/buscarPorNit/:nit', administradorControlador.buscarAdministradorPorNit);
router.get('/administrador/buscarPorId/:idAdmin', administradorControlador.buscarAdministradorPorId);
router.get('/administrador/buscarPorCorreo/:correo', administradorControlador.buscarAdministradorPorCorreo);
router.put('/administrador/actualizar/:idAdmin', administradorControlador.actualizarAdministrador);
router.delete('/administrador/eliminar/:idAdmin', administradorControlador.eliminarAdministrador);
//Router Stock
router.post('/pieza', piezaControlador.crearPieza);
router.get('/pieza/buscarPorTaller/:idTaller', piezaControlador.buscarPiezas);
router.get('/pieza/buscarPorId/:idPieza', piezaControlador.buscarPiezaPorId);
router.put('/pieza/actualizar/:idPieza', piezaControlador.actualizarPieza);
router.delete('/pieza/eliminar/:idPieza', piezaControlador.eliminarPieza);
// Router Vehiculo
router.post('/vehiculos', vehiculoControlador.crearVehiculo);
router.get('/vehiculos/buscarPorCliente/:idCliente', vehiculoControlador.buscarVehiculos);
router.get('/vehiculos/buscarPorId/:idVehiculo', vehiculoControlador.buscarVehiculoPorId);
router.put('/vehiculos/actualizar/:idVehiculo', vehiculoControlador.actualizarVehiculo);
router.delete('/vehiculos/eliminar/:idVehiculo', vehiculoControlador.eliminarVehiculo);
// Router Login
router.post('/login', administradorControlador.login);
// Router Password
router.post('/resetPassword', administradorControlador.resetPassword);
router.post('/cambiarPassword', administradorControlador.cambiarPassword);
router.post('/claimVehicle', clienteControlador.enviarNotificacionReparado);


module.exports = router;