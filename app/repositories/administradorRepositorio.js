const administradorRepositorio = module.exports;
const DB = require('../utils/DB');

administradorRepositorio.crearAdministrador = (administrador) => DB('administrador').insert(administrador).returning('*');
administradorRepositorio.buscarAdministradorPorNit = (nit) => DB('administrador').select('*').where('nit', nit);
administradorRepositorio.buscarAdministradorPorId = (idAdmin) => DB('administrador').select('*').where('idAdmin', idAdmin);
administradorRepositorio.buscarAdministradorPorCorreo = (correo) => DB('administrador').select('*').where('correo', correo).first();
administradorRepositorio.actualizarAdministrador = (administrador, idAdmin) => DB('administrador').where('idAdmin', idAdmin).update(administrador).returning('*');
administradorRepositorio.contarAdministradorPorCorreo = (correo) => DB('administrador').count('*').where('correo', correo).first();
administradorRepositorio.eliminarAdministrador = (idAdmin) => DB('administrador').select('*').where('idAdmin', idAdmin).del().returning('*');
// administradorRepositorio.login = (correo, contrasenia) => DB('administrador').select('*').where({ correo: correo } && { contrasenia: contrasenia }).first();