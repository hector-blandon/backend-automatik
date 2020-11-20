const repuestoUtilizadoServicio = module.exports;
const repuestoUtilizadoRepositorio = require('../repositories/repuestoUtilizadoRepositorio');

repuestoUtilizadoServicio.crearRepuesto = async(repuesto) => {
    console.log('repuestoUtilizadoServicio.crearRepuesto');
    const {


        idPieza: idPieza,
        idServicio: idServicio,
        cantidad: cantidad

    } = repuesto;
    const [repuestoCreado] = await repuestoUtilizadoRepositorio.crearRepuesto({
        idPieza: idPieza,
        idServicio: idServicio,
        cantidad: cantidad
    });

    return { mensaje: 'Repuesto creado correctamente' };
};





repuestoUtilizadoServicio.buscarRepuestoPorIdServicio = async(idServicio) => {
    console.log('repuestoUtilizadoServicio.buscarRepuestoPorIdServicio');
    const repuestoU = await repuestoUtilizadoRepositorio.buscarRepuestoPorIdServicio(idServicio);
    return repuestoU;
};