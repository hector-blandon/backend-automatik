const accionRealizadaServicio = module.exports;
const accionRealizadaRepositorio = require('../repositories/accionRealizadaRepositorio');

accionRealizadaServicio.crearAccionRealizada = async(accion) => {
    console.log('accionRealizadaServicio.crearAccionRealizada');
    const {


        descripcion: descripcion,
        idServicio: idServicio,
        valor: valor

    } = accion;
    const [accionCreada] = await accionRealizadaRepositorio.crearAccionRealizada({
        descripcion: descripcion,
        idServicio: idServicio,
        valor: valor

    });

    return { mensaje: 'Acción creada correctamente' };
};





accionRealizadaServicio.buscarAccionRealizadaPorIdServicio = async(idServicio) => {
    console.log('accionRealizadaServicio.buscarAccionRealizadaPorIdServicio');
    const accionesR = await accionRealizadaRepositorio.buscarAccionRealizadaPorIdServicio(idServicio);
    return accionesR;
};