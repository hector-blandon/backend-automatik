const facturaRepositorio = module.exports;
const DB = require('../utils/DB');

facturaRepositorio.crearFactura = (factura) => DB('factura').insert(factura).returning('*');
facturaRepositorio.buscarFacturaPorIdServicio = (idServicio) => DB('factura').select('*').where('idServicio', idServicio);
facturaRepositorio.buscarFacturaPorId = (idFactura) => DB('factura').select('*').where('idFactura', idFactura);