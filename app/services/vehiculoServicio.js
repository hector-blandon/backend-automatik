const vehiculoServicio = module.exports;
const vehiculoRepositorio = require('../repositories/vehiculoRepositorio');

vehiculoServicio.crearVehiculo = async(vehiculo) => {
    console.log('vehiculoServicio.crearVehiculo');
    const {
        matricula: matricula,
        marca: marca,
        color: color,
        modelo: modelo

    } = vehiculo;
    const [carro] = await vehiculoRepositorio.crearVehiculo({
        matricula: matricula,
        marca: marca,
        color: color,
        modelo: modelo,
        idCliente: 1
    });
    if (carro !== null) {
        return { mensaje: 'Vehiculo creado correctamente' };
    }

    return null;



};

vehiculoServicio.buscarVehiculoPorId = async(idvehiculo) => {
    console.log('vehiculoServicio.buscarVehiculoPorId');
    const vehiculo = await vehiculoRepositorio.buscarVehiculoPorId(idvehiculo);
    return vehiculo;
};

vehiculoServicio.actualizarvehiculo = async(vehiculo, idvehiculo) => {
    await vehiculoRepositorio.actualizarVehiculo(vehiculo, idvehiculo);
    return { mensaje: 'Vehiculo actualizado exitosamente' }
}

vehiculoServicio.eliminarVehiculo = async(idvehiculo) => {
    console.log('vehiculoServicio.eliminarVehiculo');
    await vehiculoRepositorio.eliminarVehiculo(idvehiculo);
    return { mensaje: 'Vehiculo eliminado correctamente' };
};