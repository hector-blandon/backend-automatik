const servicioServicio = module.exports;
const servicioRepositorio = require('../repositories/servicioRepositorio');


servicioServicio.crearServicio = async(servicio) => {
    console.log('servicioServicio.crearServicio');

    const {


        fechaSalida: fechaSalida,
        kilometraje: kilometraje,
        falla: falla,
        idMecanico: idMecanico,
        idCliente: idCliente,
        idVehiculo: idVehiculo,
        idFactura: idFactura

    } = servicio;
    const idTaller = 1;
    const status = true;
    const fechaIngreso = new Date();
    const [servicioCreado] = await servicioRepositorio.crearServicio({
        fechaIngreso: fechaIngreso,
        fechaSalida: fechaSalida,
        kilometraje: kilometraje,
        falla: falla,
        idTaller: idTaller,
        idMecanico: idMecanico,
        idCliente: idCliente,
        idVehiculo: idVehiculo,
        idFactura: idFactura,
        status: status


    });
    return { mensaje: 'Servicio creado exitosamente' };

};
servicioServicio.buscarServicios = async(idTaller) => {
    console.log('servicioServicio.buscarServicios');
    const servicios = await servicioRepositorio.buscarServicios(idTaller);
    return servicios;
};
servicioServicio.buscarServiciosPorIdCliente = async(idCliente) => {
    console.log('servicioServicio.buscarServiciosPorIdCliente');
    const servicio = await servicioRepositorio.buscarServiciosPorIdCliente(idCliente);
    return servicio;
};
servicioServicio.buscarServiciosPorIdMecanico = async(idMecanico) => {
    console.log('servicioServicio.buscarServiciosPorIdMecanico');
    const servicio = await servicioRepositorio.buscarServiciosPorIdMecanico(idMecanico);
    return servicio;
};
servicioServicio.buscarServiciosPorIdFactura = async(idFactura) => {
    console.log('servicioServicio.buscarServiciosPorIdFactura');
    const servicio = await servicioRepositorio.buscarServiciosPorIdFactura(idFactura);
    return servicio;
};
servicioServicio.buscarServiciosPorIdVehiculo = async(idVehiculo) => {
    console.log('servicioServicio.buscarServiciosPorIdVehiculo');
    const servicio = await servicioRepositorio.buscarServiciosPorIdVehiculo(idVehiculo);
    return servicio;
};

servicioServicio.buscarServiciosPorId = async(idServicio) => {
    console.log('servicioServicio.buscarServiciosPorId');
    const servicio = await servicioRepositorio.buscarServiciosPorId(idServicio);
    return servicio;
};
servicioServicio.actualizarServicio = async(servicio, idServicio) => {
    await servicioRepositorio.actualizarServicio(servicio, idServicio);
    return { mensaje: 'Servicio actualizado exitosamente' };
};
servicioServicio.archivarServicio = async(servicio, idServicio) => {
    servicio.status = false;
    servicio.fechaSalida = new Date();
    await servicioRepositorio.archivarServicio(servicio, idServicio);
    return { mensaje: 'Servicio archivado exitosamente' };
};