const piezaControlador = module.exports;
const piezaServicio = require('../services/piezaServicio');
const { BaseError } = require('../utils/ErrorHandlerMiddleware');
const Validator = require('../validators/validator');

piezaControlador.crearPieza = async(req, res, next) => {
    console.log('piezaControlador.crearPieza');
    const { body } = req;
    try {
        return piezaServicio.crearPieza(body)
            .then((response) => res.send(response))
            .catch((error) => next(new BaseError(error.message)));
    } catch (error) {
        return next(error);
    }
};

piezaControlador.buscarPiezas = async(req, res, next) => {
    console.log('piezaControlador.buscarPiezas');
    const { idTaller } = req.params;
    return piezaServicio.buscarPiezas()
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};

piezaControlador.buscarPiezaPorId = async(req, res, next) => {
    console.log('piezaControlador.buscarPiezaPorId');
    const { idPieza } = req.params;
    return piezaServicio.buscarPiezaPorId(idPieza)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};



piezaControlador.actualizarPieza = async(req, res) => {
    const { body } = req;
    const { idPieza } = req.params;
    return piezaServicio.actualizarPieza(body, idPieza)
        .then((response) => res.send(response));
};

piezaControlador.eliminarPieza = async(req, res, next) => {
    const { idPieza } = req.params;
    return piezaServicio.eliminarPieza(idPieza)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};