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
    const fecha = new Date();
    console.log('fecha', fecha);
    let dd = fecha.getDate();
    let mm = fecha.getMonth() + 1;
    if (mm === 01) mm = 'ENERO';
    if (mm === 02) mm = 'FEBRERO';
    if (mm === 03) mm = 'MARZO';
    if (mm === 04) mm = 'ABRIL';
    if (mm === 05) mm = 'MAYO';
    if (mm === 06) mm = 'JUNIO';
    if (mm === 07) mm = 'JULIO';
    if (mm === 08) mm = 'AGOSTO';
    if (mm === 09) mm = 'SEPTIEMBRE';
    if (mm === 10) mm = 'OCTUBRE';
    if (mm === 11) mm = 'NOVIEMBRE';
    if (mm === 12) mm = 'DICIEMBRE';
    let yyyy = fecha.getFullYear();
    const fechaIngreso = dd + '-' + mm + '-' + yyyy;
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
    const fecha = new Date();
    let dd = fecha.getDate();
    let mm = fecha.getMonth() + 1;
    if (mm === 01) mm = 'ENERO';
    if (mm === 02) mm = 'FEBRERO';
    if (mm === 03) mm = 'MARZO';
    if (mm === 04) mm = 'ABRIL';
    if (mm === 05) mm = 'MAYO';
    if (mm === 06) mm = 'JUNIO';
    if (mm === 07) mm = 'JULIO';
    if (mm === 08) mm = 'AGOSTO';
    if (mm === 09) mm = 'SEPTIEMBRE';
    if (mm === 10) mm = 'OCTUBRE';
    if (mm === 11) mm = 'NOVIEMBRE';
    if (mm === 12) mm = 'DICIEMBRE';
    let yyyy = fecha.getFullYear();
    servicio.fechaSalida = dd + '-' + mm + '-' + yyyy;
    const [resp] = await servicioRepositorio.archivarServicio(servicio, idServicio);
    return { resp, mensaje: 'Servicio archivado exitosamente' };
};