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
        console.log('hash inicio');
        console.log(hash);
        hash = bcrypt.compareSync(credenciales.contrasenia, hash.contrasenia);
        console.log('hash');
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
administradorServicio.resetPassword = async(admin) => {

    console.log('administrador.servicio.resetPassword');
    console.log(admin);
    const newPassword = Math.random().toString(36).substr(2, 8);
    const hash = bcrypt.hashSync(newPassword);
    const data = {
        contrasenia: hash
    };
    const adminCorreo = await administradorRepositorio.buscarAdministradorPorCorreo(admin.correo);
    const adminNit = await administradorRepositorio.buscarAdministradorPorNit(admin.nit);

    if (adminCorreo.idAdmin === adminNit.idAdmin) {
        console.log('admin');
        console.log(adminCorreo);
        console.log('correo');
        const [adminActualizado] = await administradorRepositorio.actualizarAdministrador(data, adminCorreo.idAdmin);
        await emailControlador.resetPassword(admin.correo, newPassword);
        console.log(newPassword);


        return adminActualizado;
    }

    return null;

}