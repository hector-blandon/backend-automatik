const fabricanteControlador = module.exports;
const fabricanteServicio = require('../services/fabricanteServicio');
const { BaseError } = require('../utils/ErrorHandlerMiddleware');
const Validator = require('../validators/validator');
const fabricanteRegisterSchema = require('../validators/fabricanteRegisterSchema');

fabricanteControlador.crearFabricante = async(req, res, next) => {
    console.log('fabricanteControlador.crearFabricante');
    const { body } = req;
    try {
        Validator(fabricanteRegisterSchema).validateRequest(body);
        return fabricanteServicio.crearFabricante(body)
            .then((response) => res.send(response))
            .catch((error) => next(new BaseError(error.message)));
    } catch (error) {
        return next(error);
    }
};

fabricanteControlador.buscarFabricantes = async(req, res, next) => {
    console.log('fabricanteControlador.buscarFabricantes');
    const {} = req.params;
    return fabricanteServicio.buscarFabricantes()
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};
fabricanteControlador.buscarFabricantePorNit = async(req, res, next) => {
    console.log('fabricanteControlador.buscarFabricantePorNit');
    const { nit } = req.params;
    return fabricanteServicio.buscarFabricantePorNit(nit)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message))).catch();
};
fabricanteControlador.buscarFabricantePorId = async(req, res, next) => {
    console.log('fabricanteControlador.buscarFabricantePorId');
    const { idFabricante } = req.params;
    return fabricanteServicio.buscarFabricantePorId(idFabricante)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};
fabricanteControlador.buscarFabricantePorCorreo = async(req, res, next) => {
    console.log('fabricanteControlador.buscarFabricantePorCorreo');
    const { email } = req.params;
    return fabricanteServicio.buscarFabricantePorCorreo(email)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};


fabricanteControlador.actualizarFabricante = async(req, res) => {
    const { body } = req;
    const { idFabricante } = req.params;
    return fabricanteServicio.actualizarFabricante(body, idFabricante)
        .then((response) => res.send(response));
};
// actualizar el estado del fabricante
fabricanteControlador.eliminarFabricante = async(req, res, next) => {
    const { idFabricante } = req.params;
    return fabricanteServicio.eliminarFabricante(idFabricante)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};