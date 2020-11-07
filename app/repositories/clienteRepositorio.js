const clienteRepositorio = module.exports;
const DB = require('../utils/DB');

clienteRepositorio.crearCliente = (cliente) => DB('cliente').insert(cliente).returning('*');
clienteRepositorio.buscarClientes = () => DB('cliente').select('*');
clienteRepositorio.buscarClientePorNit = (nit) => DB('cliente').select('*').where('nit', nit);
clienteRepositorio.buscarClientePorId = (idCliente) => DB('cliente').select('*').where('idCliente', idCliente);
clienteRepositorio.buscarClientePorCorreo = (correo) => DB('cliente').select('*').where('correo', correo);
clienteRepositorio.actualizarCliente = (cliente, idCliente) => DB('cliente').where('idCliente', idCliente).update(cliente).returning('*');
clienteRepositorio.contarClientePorNit = (nit) => DB('cliente').count('*').where({ nit: nit }).first();
clienteRepositorio.eliminarCliente = (idCliente) => DB('cliente').select('*').where('idCliente', idCliente).del().returning('*');