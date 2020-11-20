const repuestoUtilizadoControlador = module.exports;
const repuestoUtilizadoServicio = require('../services/repuestoUtilizadoServicio');
const { BaseError } = require('../utils/ErrorHandlerMiddleware');
const Validator = require('../validators/validator');



repuestoUtilizadoControlador.crearRepuesto = async(req, res, next) => {
    console.log('repuestoUtilizadoControlador.crearRepuesto');
    const { body } = req;
    try {
        return repuestoUtilizadoServicio.crearRepuesto(body)
            .then((response) => res.send(response))
            .catch((error) => next(new BaseError(error.message)));
    } catch (error) {
        return next(error);
    }
};




repuestoUtilizadoControlador.buscarRepuestosPorIdServicio = async(req, res, next) => {
    console.log('repuestoUtilizadoControlador.buscarRepuestosPorIdServicio');
    const { idServicio } = req.params;
    return repuestoUtilizadoServicio.buscarRepuestoPorIdServicio(idServicio)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};