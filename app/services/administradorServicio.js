const administradorServicio = module.exports;
const bcrypt = require('bcrypt-nodejs');
const administradorRepositorio = require('../repositories/administradorRepositorio');
const emailControlador = require('../controllers/emailControlador');

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

administradorServicio.buscarAdministradores = async(idTaller) => {
    console.log('AdministradorServicio.buscarAdministradores');
    const administradores = await administradorRepositorio.buscarAdministradores(idTaller);
    return administradores;
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
    console.log('servicioadministrador.actualizar');
    let correcto = false;
    try {
        await administradorRepositorio.actualizarAdministrador(administrador, idAdmin);
        correcto = true;
        return { correcto, mensaje: 'Administrador actualizado exitosamente' }
    } catch (error) {
        console.log(error);
        return null;
    }


};

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
        hash = bcrypt.compareSync(credenciales.contrasenia, hash.contrasenia);
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
administradorServicio.resetPassword = async(admin) => {

    console.log('administrador.servicio.resetPassword');
    const newPassword = Math.random().toString(36).substr(2, 8);
    const hash = bcrypt.hashSync(newPassword);
    const data = {
        contrasenia: hash
    };
    let correcto = false;
    const adminCorreo = await administradorRepositorio.buscarAdministradorPorCorreo(admin.correo);
    const adminNit = await administradorRepositorio.buscarAdministradorPorNit(admin.nit);
    if (adminCorreo !== undefined || adminNit !== undefined) {
        if (adminCorreo.idAdmin === adminNit.idAdmin) {
            correcto = true;
            const [adminActualizado] = await administradorRepositorio.actualizarAdministrador(data, adminCorreo.idAdmin);
            await emailControlador.resetPassword(admin.correo, newPassword, adminCorreo.nombre);
            console.log(newPassword);


            return { correcto, mensaje: 'Contraseña enviada con éxito al correo ' + '' + adminActualizado.correo };
        }

    } else {
        return { correcto, mensaje: 'El correo o el documento son incorrectos' };

    }



};
administradorServicio.cambiarPassword = async(idAdmin, nuevoPassword) => {

    console.log('administradorServicio.cambiarPassword');
    console.log(idAdmin);
    console.log(nuevoPassword);
    const hash = bcrypt.hashSync(nuevoPassword);
    const data = {
        contrasenia: hash
    };
    let correcto = false;
    console.log(idAdmin);
    const admin = await administradorRepositorio.buscarAdministradorPorId(idAdmin);
    console.log(admin);
    if (admin !== undefined) {
        correcto = true;
        const [adminActualizado] = await administradorRepositorio.actualizarAdministrador(data, admin.idAdmin);
        await emailControlador.cambiarPassword(admin.correo, nuevoPassword, admin.nombre);
        return { correcto, mensaje: 'Contraseña enviada con éxito al correo ' + '' + adminActualizado.correo };

    } else {
        return { correcto, mensaje: 'El Administrador no existe' };

    }



}