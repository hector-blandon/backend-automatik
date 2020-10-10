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


// userController.findByUserId = async(req, res, next) => {
//     const logName = 'findByUserId: ';
//     const logger = LogUtils.getLoggerWithId(log4j, logName);
//     const { userid } = req.params;
//     logger.info(`Start userController.findByUserId: params ${JSON.stringify(userid)}`);


//     return userService.findByUserId(userid, { logger, logName })
//         .then((response) => res.send(response))
//         .catch((error) => next(new BaseError(error.message)));
// };


// userController.updateUser = async(req, res) => {
//     const logName = 'updateUser : ';
//     const logger = LogUtils.getLoggerWithId(log4j, logName);

//     const { body } = req;
//     logger.info(`Start userController.updateUser: body ${JSON.stringify(body)}`);

//     const { userid } = req.params;
//     logger.info(`Start userController.updateUser: params ${JSON.stringify(userid)}`);

//     return userService.updateUser(body, userid, { logger, logName })
//         .then((response) => res.send(response));
// };

// userController.resetPassword = async(req, res, next) => {
//     const logName = 'resetPasword: ';
//     const logger = LogUtils.getLoggerWithId(log4j, logName);
//     const { body } = req;
//     logger.info(`Starts userController.resetPassword: params ${JSON.stringify(body)}`);

//     try {
//         return userService.resetPassword(body, { logger, logName })
//             .then((response) => res.send(response))
//             .catch((error) => next(new BaseError(error.message)));
//     } catch (error) {
//         return next(error);
//     }
// };

// userController.findAuthIdByUserId = async(req, res, next) => {
//     const logName = 'findAuthIdByUserId: ';
//     const logger = LogUtils.getLoggerWithId(log4j, logName);
//     const { params } = req;
//     logger.info(`Start userController.findAuthIdByUserId: params ${JSON.stringify(params.authid)}`);


//     return userService.findAuthIdByUserId(params.authid, { logger, logName })
//         .then((response) => res.send(response))
//         .catch((error) => next(new BaseError(error.message)));
// };