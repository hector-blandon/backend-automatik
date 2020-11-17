const facturaControlador = module.exports;
const facturaServicio = require('../services/facturaServicio');
const { BaseError } = require('../utils/ErrorHandlerMiddleware');
const Validator = require('../validators/validator');


facturaControlador.crearFactura = async(req, res, next) => {
    console.log('facturaControlador.crearFactura');
    const { body } = req;
    try {
        return facturaServicio.crearFactura(body)
            .then((response) => res.send(response))
            .catch((error) => next(new BaseError(error.message)));
    } catch (error) {
        return next(error);
    }
};

facturaControlador.buscarFacturaPorIdServicio = async(req, res, next) => {
    console.log('facturaControlador.buscarFacturaPorIdServicio');
    const { idServicio } = req.params;
    return facturaServicio.buscarFacturaPorIdServicio(idServicio)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};

facturaControlador.buscarFacturaPorId = async(req, res, next) => {
    console.log('facturaControlador.buscarFacturaPorId');
    const { idFactura } = req.params;
    return facturaServicio.buscarFacturaPorId(idFactura)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};