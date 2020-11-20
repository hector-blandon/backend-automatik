const accionRealizadaControlador = module.exports;
const accionRealizadaServicio = require('../services/accionRealizadaServicio');
const { BaseError } = require('../utils/ErrorHandlerMiddleware');
const Validator = require('../validators/validator');


accionRealizadaControlador.crearAccionRealizada = async(req, res, next) => {
    console.log('accionRealizadaControlador.crearAccionRealizada');
    const { body } = req;
    try {
        return accionRealizadaServicio.crearAccionRealizada(body)
            .then((response) => res.send(response))
            .catch((error) => next(new BaseError(error.message)));
    } catch (error) {
        return next(error);
    }
};



accionRealizadaControlador.buscarAccionRealizadaPorIdServicio = async(req, res, next) => {
    console.log('accionRealizadaControlador.buscarAccionRealizadaPorIdServicio');
    const { idServicio } = req.params;
    return accionRealizadaServicio.buscarAccionRealizadaPorIdServicio(idServicio)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};