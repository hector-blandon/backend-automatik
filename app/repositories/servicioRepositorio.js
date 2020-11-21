const servicioRepositorio = module.exports;
const DB = require('../utils/DB');



servicioRepositorio.crearServicio = (servicio) => DB('servicio').insert(servicio).returning('*');
servicioRepositorio.buscarServicios = (idTaller) => DB('servicio').select('*').where({ 'idTaller': idTaller } && { 'status': true }).orderBy('fechaSalida', 'asc');
servicioRepositorio.buscarServiciosPorIdCliente = (idCliente) => DB('servicio').select('*').where('idCliente', idCliente);
servicioRepositorio.buscarServiciosPorIdMecanico = (idMecanico) => DB('servicio').select('*').where('idMecanico', idMecanico);
servicioRepositorio.buscarServiciosPorIdFactura = (idFactura) => DB('servicio').select('*').where('idFactura', idFactura).first();
servicioRepositorio.buscarServiciosPorIdVehiculo = (idVehiculo) => DB('servicio').select('*').where('idVehiculo', idVehiculo);
servicioRepositorio.buscarServiciosPorId = (idServicio) => DB('servicio').select('*').where('idServicio', idServicio).first();
servicioRepositorio.actualizarServicio = (servicio, idServicio) => DB('servicio').where('idServicio', idServicio).update(servicio).returning('*');
servicioRepositorio.archivarServicio = (servicio, idServicio) => DB('servicio').where('idServicio', idServicio).update(servicio).returning('*');