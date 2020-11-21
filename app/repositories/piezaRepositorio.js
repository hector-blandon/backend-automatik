const piezaRepositorio = module.exports;
const DB = require('../utils/DB');

piezaRepositorio.crearPieza = (pieza) => DB('pieza').insert(pieza).returning('*');
piezaRepositorio.buscarPiezas = (idTaller) => DB('pieza').select('*').where('idTaller', idTaller).orderBy('idPieza', 'asc');
piezaRepositorio.buscarPiezaPorId = (idPieza) => DB('pieza').select('*').where('idPieza', idPieza).first();
piezaRepositorio.actualizarPieza = (pieza, idPieza) => DB('pieza').where('idPieza', idPieza).update(pieza).returning('*');
piezaRepositorio.eliminarPieza = (idPieza) => DB('pieza').select('*').where('idPieza', idPieza).del().returning('*');