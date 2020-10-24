const administradorServicio = module.exports;
const bcrypt = require('bcrypt-nodejs');
const administradorRepositorio = require('../repositories/administradorRepositorio');

administradorServicio.crearAdministrador = async(administrador) => {
    console.log('administradorServicio.crearAdministrador');
    console.log(administrador);
    const {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        nit: nit,
        contrasenia: contrasenia,
        telefono: telefono
    } = administrador;
    const res = await administradorRepositorio.contarAdministradorPorCorreo(correo);

    if (res.count < 1) {
        const hash = bcrypt.hashSync(contrasenia);
        await administradorRepositorio.crearAdministrador({
            nombre: nombre,
            apellido: apellido,
            nit: nit,
            correo: correo,
            contrasenia: hash,
            telefono: telefono,
            idTaller: 1
        });

        return { mensaje: 'Administrador creado correctamente' };
    }

    return { mensaje: 'Ya existe un administrador con éste correo' };
};

administradorServicio.buscarAdministradorPorNit = async(nit) => {
    console.log('MecanicoServicio.buscarAdministradorPorNit');
    const administrador = await administradorRepositorio.buscarAdministradorPorNit(nit);
    return administrador;
};
administradorServicio.buscarAdministradorPorId = async(idAdmin) => {
    console.log('administradorServicio.buscarAdministradorPorId');
    const administrador = await administradorRepositorio.buscarAdministradorPorId(idAdmin);
    return administrador;
};
administradorServicio.buscarAdministradorPorCorreo = async(correo) => {
    console.log('administradorServicio.buscarAdministradorPorCorreo');
    const administrador = await administradorRepositorio.buscarAdministradorPorCorreo(correo);
    return administrador;
};
administradorServicio.actualizarAdministrador = async(administrador, idAdmin) => {
    await administradorRepositorio.actualizarAdministrador(administrador, idAdmin);
    return { mensaje: 'Administrador actualizado exitosamente' }
}

administradorServicio.eliminarAdministrador = async(idAdmin) => {
    await administradorRepositorio.eliminarAdministrador(idAdmin);
    return { mensaje: 'Administrador Eliminado exitosamente' }
};
administradorServicio.login = async(credenciales) => {
    console.log('servicio.login');
    let resp;
    let correcto = false;
    try {
        let hash = await administradorRepositorio.buscarAdministradorPorCorreo(credenciales.correo);
        console.log('credenciales');
        console.log(credenciales);
        console.log('hash');
        console.log(hash);
        hash = bcrypt.compareSync(credenciales.contrasenia, hash.contrasenia);
        console.log('true o false');
        console.log(hash);
        if (hash) {
            resp = await administradorRepositorio.buscarAdministradorPorCorreo(credenciales.correo);
            correcto = true;

            return { resp, correcto, mensaje: 'Bienvenido de nuevo' + ' ' + resp.nombre };
        } else {
            return { correcto, mensaje: 'El correo o la contraseña son incorrectos' };
        }

    } catch (error) {
        console.log(error);

        return null;
    }
};