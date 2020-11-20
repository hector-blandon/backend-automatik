const fabricanteServicio = module.exports;
const bcrypt = require('bcrypt-nodejs');
const fabricanteRepositorio = require('../repositories/fabricanteRepositorio');
const emailControlador = require('../controllers/emailControlador');

fabricanteServicio.crearFabricante = async(fabricante) => {
    console.log('fabricanteServicio.crearFabricante');
    console.log(fabricante);
    const {
        nit: nit,
        nombre: nombre,
        direccion: direccion,
        telefono: telefono,
        email: email
    } = fabricante;
    const res = await fabricanteRepositorio.contarFabricantePorCorreo(email);

    if (res.count < 1) {
        await fabricanteRepositorio.crearFabricante({
            nit: nit,
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            email: email,
        });

        return { mensaje: 'Fabricante creado correctamente' };
    }

    return { mensaje: 'Ya existe un fabricante con éste email' };
};

fabricanteServicio.buscarFabricantes = async() => {
    console.log('FabricanteServicio.buscarFabricantes');
    const fabricantes = await fabricanteRepositorio.buscarFabricantes();
    return fabricantes;
};
fabricanteServicio.buscarFabricantePorNit = async(nit) => {
    console.log('FabricanteServicio.buscarFabricantePorNit');
    const fabricante = await fabricanteRepositorio.buscarFabricantePorNit(nit);
    return fabricante;
};
fabricanteServicio.buscarFabricantePorId = async(idFabricante) => {
    console.log('fabricanteServicio.buscarFabricantePorId');
    const fabricante = await fabricanteRepositorio.buscarFabricantePorId(idFabricante);
    return fabricante;
};
fabricanteServicio.buscarFabricantePorCorreo = async(email) => {
    console.log('fabricanteServicio.buscarFabricantePorCorreo');
    const fabricante = await fabricanteRepositorio.buscarFabricantePorCorreo(email);
    return fabricante;
};
fabricanteServicio.actualizarFabricante = async(fabricante, idFabricante) => {
    await fabricanteRepositorio.actualizarFabricante(fabricante, idFabricante);
    return { mensaje: 'Fabricante actualizado exitosamente' }
}

fabricanteServicio.eliminarFabricante = async(idFabricante) => {
    await fabricanteRepositorio.eliminarFabricante(idFabricante);
    return { mensaje: 'Fabricante Eliminado exitosamente' }
};