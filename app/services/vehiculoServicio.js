const vehiculoServicio = module.exports;
const vehiculoRepositorio = require('../repositories/vehiculoRepositorio');

vehiculoServicio.crearVehiculo = async(vehiculo) => {
    console.log('vehiculoServicio.crearVehiculo');
    const {
        matricula: matricula,
        marca: marca,
        color: color,
        modelo: modelo,
        idCliente: idCliente
    } = vehiculo;

    const res = await vehiculoRepositorio.contarVehiculoPorMatricula(matricula);
    console.log(res.count);
    if (res.count < 1) {
        const [carro] = await vehiculoRepositorio.crearVehiculo({
            matricula: matricula,
            marca: marca,
            color: color,
            modelo: modelo,
            idCliente: idCliente
        });
        return { carro, mensaje: 'Vehiculo creado correctamente' };
    } else {
        return { mensaje: 'Ya existe un vehiculo con esa matricula' };

    }

};

vehiculoServicio.buscarVehiculos = async(idCliente) => {
    console.log('vehiculoServicio.buscarVehiculos');
    const vehiculos = await vehiculoRepositorio.buscarVehiculos(idCliente);
    return vehiculos;
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