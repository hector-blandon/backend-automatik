const accionRealizadaRepositorio = module.exports;
const DB = require('../utils/DB');


accionRealizadaRepositorio.crearAccionRealizada = (accionRealizada) => DB('accionRealizada').insert(accionRealizada).returning('*');
accionRealizadaRepositorio.buscarAccionRealizadaPorIdServicio = (idServicio) => DB('accionRealizada').select('*').where('idServicio', idServicio);