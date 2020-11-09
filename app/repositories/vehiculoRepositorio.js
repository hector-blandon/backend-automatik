const vehiculoRepositorio = module.exports;
const DB = require('../utils/DB');

vehiculoRepositorio.crearVehiculo = (vehiculo) => DB('vehiculo').insert(vehiculo).returning('*');
vehiculoRepositorio.buscarVehiculos = (idCliente) => DB('vehiculo').select('*').where('idCliente', idCliente);
vehiculoRepositorio.buscarVehiculoPorId = (idVehiculo) => DB('vehiculo').select('*').where('idVehiculo', idVehiculo).first();
vehiculoRepositorio.actualizarVehiculo = (vehiculo, idVehiculo) => DB('vehiculo').where('idVehiculo', idVehiculo).update(vehiculo).returning('*');
vehiculoRepositorio.eliminarVehiculo = (idVehiculo) => DB('vehiculo').select('*').where('idVehiculo', idVehiculo).del().returning('*');