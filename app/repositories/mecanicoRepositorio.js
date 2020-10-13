const mecanicoRepositorio = module.exports;
const DB = require('../utils/DB');

mecanicoRepositorio.crearMecanico = (mecanico) => DB('mecanico').insert(mecanico).returning('*');
mecanicoRepositorio.buscarMecanicoPorNit = (nit) => DB('mecanico').select('*').where('nit', nit);
mecanicoRepositorio.buscarMecanicoPorId = (idMecanico) => DB('mecanico').select('*').where('idMecanico', idMecanico);
mecanicoRepositorio.buscarMecanicoPorCorreo = (correo) => DB('mecanico').select('*').where('correo', correo);
mecanicoRepositorio.actualizarMecanico = (mecanico, idMecanico) => DB('mecanico').where('idMecanico', idMecanico).update(mecanico).returning('*');
mecanicoRepositorio.contarMecanicoPorNit = (nit) => DB('mecanico').count('*').where({ nit: nit }).first();
mecanicoRepositorio.eliminarMecanico = (idMecanico) => DB('mecanico').select('*').where('idMecanico', idMecanico).del().returning('*');