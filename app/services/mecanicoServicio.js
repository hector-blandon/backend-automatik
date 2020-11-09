const mecanicoServicio = module.exports;
const mecanicoRepositorio = require('../repositories/mecanicoRepositorio');

mecanicoServicio.crearMecanico = async(mecanico) => {
    console.log('mecanicoServicio.crearMecanico');
    const {
        nombre: nombre,
        apellido: apellido,
        nit: nit,
        correo: correo,
        direccion: direccion,
        telefono: telefono
    } = mecanico;
    const res = await mecanicoRepositorio.contarMecanicoPorNit(nit);
    if (res.count < 1) {
        const idTaller = 1;
        const [mecanicoCreado] = await mecanicoRepositorio.crearMecanico({
            nombre: nombre,
            apellido: apellido,
            nit: nit,
            correo: correo,
            direccion: direccion,
            telefono: telefono,
            idTaller: idTaller
        });
        return { mensaje: 'Mecánico creado exitosamente' };
    }
    return null;

};
mecanicoServicio.buscarMecanicos = async(idTaller) => {
    console.log('MecanicoServicio.buscarMecanicos');
    const mecanicos = await mecanicoRepositorio.buscarMecanicos(idTaller);
    return mecanicos;
};
mecanicoServicio.buscarMecanicoPorNit = async(nit) => {
    console.log('MecanicoServicio.buscarMecanicoPorNit');
    const mecanico = await mecanicoRepositorio.buscarMecanicoPorNit(nit);
    return mecanico;
};
mecanicoServicio.buscarMecanicoPorId = async(idMecanico) => {
    console.log('mecanicoServicio.buscarMecanicoPorId');
    const mecanico = await mecanicoRepositorio.buscarMecanicoPorId(idMecanico);
    return mecanico;
};
mecanicoServicio.buscarMecanicoPorCorreo = async(correo) => {
    console.log('clienteServicio.buscarMecanicoPorCorreo');
    const mecanico = await mecanicoRepositorio.buscarMecanicoPorCorreo(correo);
    return cliente
};
mecanicoServicio.actualizarMecanico = async(mecanico, idMecanico) => {
    await mecanicoRepositorio.actualizarMecanico(mecanico, idMecanico);
    return { mensaje: 'Mecánico actualizado exitosamente' }
}

mecanicoServicio.eliminarMecanico = async(idMecanico) => {
    await mecanicoRepositorio.eliminarMecanico(idMecanico);
    return { mensaje: 'Mecánico Eliminado exitosamente' }
};