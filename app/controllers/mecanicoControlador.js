const mecanicoControlador = module.exports;
const mecanicoServicio = require('../services/mecanicoServicio');
const { BaseError } = require('../utils/ErrorHandlerMiddleware');
const Validator = require('../validators/validator');

const mecanicoRegisterSchema = require('../validators/clienteRegisterSchema');


mecanicoControlador.crearMecanico = async(req, res, next) => {
    console.log('mecanicoControlador.crearMecanico');

    const { body } = req;
    try {
        Validator(mecanicoRegisterSchema).validateRequest(body);

        return mecanicoServicio.crearMecanico(body)
            .then((response) => res.send(response))
            .catch((error) => next(new BaseError(error.message)));
    } catch (error) {
        return next(error);
    }
};


mecanicoControlador.buscarMecanicoPorNit = async(req, res, next) => {
    console.log('mecanicoControlador.buscarMecanicoPorNit');
    const { nit } = req.params;
    return mecanicoServicio.buscarMecanicoPorNit(nit)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};
mecanicoControlador.buscarMecanicoPorId = async(req, res, next) => {
    console.log('mecanicoControlador.buscarMecanicoPorId');
    const { idMecanico } = req.params;
    return mecanicoServicio.buscarMecanicoPorId(idMecanico)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};
mecanicoControlador.buscarMecanicoPorCorreo = async(req, res, next) => {
    console.log('mecanicoControlador.buscarMecanicoPorCorreo');
    const { correo } = req.params;
    return mecanicoServicio.buscarMecanicoPorCorreo(correo)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};


mecanicoControlador.actualizarMecanico = async(req, res) => {
    const { body } = req;
    const { idMecanico } = req.params;
    return mecanicoServicio.actualizarMecanico(body, idMecanico)
        .then((response) => res.send(response));
};
// actualizar el estado del cliente
mecanicoControlador.eliminarMecanico = async(req, res, next) => {
    const { idMecanico } = req.params;
    return mecanicoServicio.eliminarMecanico(idMecanico)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};