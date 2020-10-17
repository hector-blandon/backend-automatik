const vehiculoControlador = module.exports;
const vehiculoServicio = require('../services/vehiculoServicio');
const { BaseError } = require('../utils/ErrorHandlerMiddleware');
const Validator = require('../validators/validator');

vehiculoControlador.crearVehiculo = async(req, res, next) => {
    console.log('vehiculoControlador.crearVehiculo');
    const { body } = req;
    try {
        return vehiculoServicio.crearVehiculo(body)
            .then((response) => res.send(response))
            .catch((error) => next(new BaseError(error.message)));
    } catch (error) {
        return next(error);
    }
};


vehiculoControlador.buscarVehiculoPorId = async(req, res, next) => {
    console.log('vehiculoControlador.buscarVehiculoPorId');
    const { idVehiculo } = req.params;
    return vehiculoServicio.buscarVehiculoPorId(idVehiculo)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};



vehiculoControlador.actualizarVehiculo = async(req, res) => {
    const { body } = req;
    const { idVehiculo } = req.params;
    return vehiculoServicio.actualizarvehiculo(body, idVehiculo)
        .then((response) => res.send(response));
};

vehiculoControlador.eliminarVehiculo = async(req, res, next) => {
    const { idVehiculo } = req.params;
    return vehiculoServicio.eliminarVehiculo(idVehiculo)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};