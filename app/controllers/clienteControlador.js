const clienteControlador = module.exports;
const clienteServicio = require('../services/clienteServicio');
const { BaseError } = require('../utils/ErrorHandlerMiddleware');
// const log4j = require('../utils/logger');
// const LogUtils = require('../utils/logUtils');
const Validator = require('../validators/validator');

const clienteRegisterSchema = require('../validators/clienteRegisterSchema');

/**
 * @api {POST} /api/
 * @apiName UserRegister
 * @apiGroup User
 * @apiDescription  Registration, deletion,search , and user update
 *
 * @apiParam (body) {Object} user id, name, adress, phone
 * @apiParamExample {json} Body example:
 * {
 *    UserName : "john Reyes"
 *    UserPhone : " 3218941144"
 *    UserAdress : " La Virginia mz 14 casa 25, Armenia"
 *    UserId     : "1097389990"
 * }
 *
 * @apiSuccessExample Success Response:
 * HTTP/1.1 200
 *
 * @apiError (400) {null} Error if object param is invalid
 * @apiError (500) {Object} Error on internal runtime, should return nothing.
 */


clienteControlador.crearCliente = async(req, res, next) => {
    console.log('clienteControlador.crearCliente');
    // const logName = 'Guardar Cliente: ';
    // const logger = LogUtils.getLoggerWithId(log4j, logName);
    const { body } = req;
    // logger.info(`Inicia clienteControlador.crearCliente: parametros ${JSON.stringify(body)}`);

    try {
        Validator(clienteRegisterSchema).validateRequest(body);

        return clienteServicio.crearCliente(body)
            .then((response) => res.send(response))
            .catch((error) => next(new BaseError(error.message)));
    } catch (error) {
        return next(error);
    }
};


clienteControlador.buscarClientePorNit = async(req, res, next) => {
    console.log('clienteControlador.buscarClientePorNit');
    const { nit } = req.params;
    return clienteServicio.buscarClientePorNit(nit)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};
clienteControlador.buscarClientePorId = async(req, res, next) => {
    console.log('clienteControlador.buscarClientePorId');
    const { idCliente } = req.params;
    return clienteServicio.buscarClientePorId(idCliente)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};
clienteControlador.buscarClientePorCorreo = async(req, res, next) => {
    console.log('clienteControlador.buscarClientePorCorreo');
    const { correo } = req.params;
    return clienteServicio.buscarClientePorCorreo(correo)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};


clienteControlador.actualizarCliente = async(req, res) => {
    const { body } = req;
    const { idCliente } = req.params;
    return clienteServicio.actualizarCliente(body, idCliente)
        .then((response) => res.send(response));
};

clienteControlador.eliminarCliente = async(req, res, next) => {
    const { idCliente } = req.params;
    return clienteServicio.eliminarCliente(idCliente)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};