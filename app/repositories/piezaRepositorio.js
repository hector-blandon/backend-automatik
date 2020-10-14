const piezaRepositorio = module.exports;
const DB = require('../utils/DB');

piezaRepositorio.crearPieza = (pieza) => DB('pieza').insert(pieza).returning('*');
piezaRepositorio.buscarPiezaPorId = (idPieza) => DB('pieza').select('*').where('idPieza', idPieza);
piezaRepositorio.actualizarPieza = (pieza, idPieza) => DB('pieza').where('idPieza', idPieza).update(pieza).returning('*');
piezaRepositorio.eliminarPieza = (idPieza) => DB('pieza').select('*').where('idPieza', idPieza).del().returning('*');