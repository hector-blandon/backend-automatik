const clienteServicio = module.exports;
const clienteRepositorio = require('../repositories/clienteRepositorio');
const emailControlador = require('../controllers/emailControlador');

clienteServicio.crearCliente = async(cliente) => {
    console.log('clienteServicio.crearCliente');
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
    } else {
        return { mensaje: 'Ya existe un cliente con ese nit' };

    }


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
    const [cliente] = await clienteRepositorio.buscarClientePorId(idCliente);

    return cliente
};
clienteServicio.buscarClientePorCorreo = async(correo) => {
    console.log('clienteServicio.buscarClientePorCorreo');
    const cliente = await clienteRepositorio.buscarClientePorCorreo(correo);

    return cliente
};
clienteServicio.actualizarCliente = async(cliente, idCliente) => {
    const [client] = await clienteRepositorio.actualizarCliente(cliente, idCliente);
    return { client, mensaje: 'Cliente actualizado correctamente' };
};

clienteServicio.eliminarCliente = async(idCliente) => {
    const cliente = await clienteRepositorio.eliminarCliente(idCliente);
    return { cliente, mensaje: 'Cliente eliminado correctamente' }
};
clienteServicio.enviarNotificacionReparado = async(idCliente) => {
    const clienteCorreo = this.buscarClientePorId(idCliente);
    const acliente = await emailControlador.claimVehicle(admin.correo);
    return cliente;
};