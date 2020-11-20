const repuestoUtilizadoRepositorio = module.exports;
const DB = require('../utils/DB');

repuestoUtilizadoRepositorio.crearRepuesto = (repuesto) => DB('repuestoUtilizado').insert(repuesto).returning('*');

repuestoUtilizadoRepositorio.buscarRepuestoPorIdServicio = (idServicio) => DB('repuestoUtilizado').select('*').where('idServicio', idServicio).first();