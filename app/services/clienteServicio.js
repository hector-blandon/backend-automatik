const clienteServicio = module.exports;
// const bcrypt = require('bcrypt-nodejs');
const clienteRepositorio = require('../repositories/clienteRepositorio');
const emailControlador = require('../controllers/emailControlador');
// const nodemailer = require('nodemailer');
// const emailController = require('../controllers/emailController');

// const authRepository = require('../repositories/authRepository');
// const directionRepository = require('../repositories/directionRepository');
// const log4j = require('../utils/logger');

// const defaultLogger = log4j.getLogger('clienteServicio');

clienteServicio.crearCliente = async(cliente) => {
    console.log('clienteServicio.crearCliente');
    // const {
    //     logger = defaultLogger,
    // } = options;
    // logger.info(`clienteServicio.crearCliente with ${JSON.stringify(cliente)}`);
    const {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        nit: nit,
        direccion: direccion,
        telefono: telefono
    } = cliente;
    const res = await clienteRepositorio.contarClientePorNit(nit);
    console.log(res.count);
    if (res.count < 1) {
        const idTaller = 1;
        const [clienteCreado] = await clienteRepositorio.crearCliente({
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            nit: nit,
            direccion: direccion,
            telefono: telefono,
            idTaller: idTaller
        });
        return { clienteCreado, mensaje: 'agregado' };
    }
    return null;

};
clienteServicio.buscarClientes = async(idTaller) => {
    console.log('clienteServicio.buscarClientes');
    const clientes = await clienteRepositorio.buscarClientes(idTaller);

    return clientes
};
clienteServicio.buscarClientePorNit = async(nit) => {
    console.log('clienteServicio.buscarClientePorNit');
    const cliente = await clienteRepositorio.buscarClientePorNit(nit);

    return cliente
};
clienteServicio.buscarClientePorId = async(idCliente) => {
    console.log('clienteServicio.buscarClientePorId');
    const cliente = await clienteRepositorio.buscarClientePorId(idCliente);

    return cliente
};
clienteServicio.buscarClientePorCorreo = async(correo) => {
    console.log('clienteServicio.buscarClientePorCorreo');
    const cliente = await clienteRepositorio.buscarClientePorCorreo(correo);

    return cliente
};
clienteServicio.actualizarCliente = async(cliente, idCliente) => {
    const [client] = await clienteRepositorio.actualizarCliente(cliente, idCliente);
    return client;
};

clienteServicio.eliminarCliente = async(idCliente) => {
    const cliente = await clienteRepositorio.eliminarCliente(idCliente);
    return cliente
};
clienteServicio.enviarNotificacionReparado = async(idCliente) => {
    const clienteCorreo = this.buscarClientePorId(idCliente);
   const acliente =  await emailControlador.claimVehicle(admin.correo);
    return cliente;
};