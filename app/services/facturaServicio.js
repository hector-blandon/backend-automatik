const facturaServicio = module.exports;
const facturaRepositorio = require('../repositories/facturaRepositorio');

facturaServicio.crearFactura = async(factura) => {
    console.log('facturaServicio.crearFactura');
    const {

        idServicio: idServicio,
        valor: valor

    } = factura;
    const [facturaCreada] = await facturaRepositorio.crearFactura({
        idServicio: idServicio,
        valor: valor

    });

    return { mensaje: 'Factura creada correctamente' };
};


facturaServicio.buscarFacturaPorIdServicio = async(idServicio) => {
    console.log('facturaServicio.buscarFacturaPorIdServicio');
    const facturas = await facturaRepositorio.buscarFacturaPorIdServicio(idServicio);
    return facturas;
};
facturaServicio.buscarFacturaPorId = async(idFactura) => {
    console.log('facturaServicio.buscarFacturaPorId');
    const facturas = await facturaRepositorio.buscarFacturaPorId(idFactura);
    return facturas;
};