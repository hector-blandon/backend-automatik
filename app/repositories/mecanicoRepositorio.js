const mecanicoRepositorio = module.exports;
const DB = require('../utils/DB');

mecanicoRepositorio.crearMecanico = (mecanico) => DB('mecanico').insert(mecanico).returning('*');
mecanicoRepositorio.buscarMecanicos = (idTaller) => DB('mecanico').select('*').where('idTaller', idTaller).orderBy('idMecanico', 'asc');
mecanicoRepositorio.buscarMecanicoPorNit = (nit) => DB('mecanico').select('*').where('nit', nit).first();
mecanicoRepositorio.buscarMecanicoPorId = (idMecanico) => DB('mecanico').select('*').where('idMecanico', idMecanico).first();
mecanicoRepositorio.buscarMecanicoPorCorreo = (correo) => DB('mecanico').select('*').where('correo', correo).first();
mecanicoRepositorio.actualizarMecanico = (mecanico, idMecanico) => DB('mecanico').where('idMecanico', idMecanico).update(mecanico).returning('*');
mecanicoRepositorio.contarMecanicoPorNit = (nit) => DB('mecanico').count('*').where({ nit: nit }).first();
mecanicoRepositorio.eliminarMecanico = (idMecanico) => DB('mecanico').select('*').where('idMecanico', idMecanico).del().returning('*');