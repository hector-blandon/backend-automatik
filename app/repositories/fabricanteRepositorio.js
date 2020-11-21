const fabricanteRepositorio = module.exports;
const DB = require('../utils/DB');

fabricanteRepositorio.crearFabricante = (fabricante) => DB('fabricante').insert(fabricante).returning('*');
fabricanteRepositorio.buscarFabricantes = () => DB('fabricante').select('*').orderBy('idFabricante', 'asc');
fabricanteRepositorio.buscarFabricantePorNit = (nit) => DB('fabricante').select('*').where('nit', nit).first();
fabricanteRepositorio.buscarFabricantePorId = (idFabricante) => DB('fabricante').select('*').where('idFabricante', idFabricante).first();
fabricanteRepositorio.buscarFabricantePorCorreo = (email) => DB('fabricante').select('*').where('email', email).first();
fabricanteRepositorio.actualizarFabricante = (fabricante, idFabricante) => DB('fabricante').where('idFabricante', idFabricante).update(fabricante).returning('*');
fabricanteRepositorio.contarFabricantePorCorreo = (email) => DB('fabricante').count('*').where('email', email).first();
fabricanteRepositorio.eliminarFabricante = (idFabricante) => DB('fabricante').select('*').where('idFabricante', idFabricante).del().returning('*');