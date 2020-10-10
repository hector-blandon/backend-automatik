const clienteServicio = module.exports;
// const bcrypt = require('bcrypt-nodejs');
const clienteRepositorio = require('../repositories/clienteRepositorio');
// const nodemailer = require('nodemailer');
// const emailController = require('../controllers/emailController');

// const authRepository = require('../repositories/authRepository');
// const directionRepository = require('../repositories/directionRepository');
// const log4j = require('../utils/logger');

// const defaultLogger = log4j.getLogger('clienteServicio');

clienteServicio.crearCliente = async(cliente) => {
    console.log('clienteServicio.crearCliente');
    // const {
    //     logger = defaultLogger,
    // } = options;
    // logger.info(`clienteServicio.crearCliente with ${JSON.stringify(cliente)}`);
    const {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        nit: nit,
        direccion: direccion,
        telefono: telefono
    } = cliente;
    const res = await clienteRepositorio.contarClientePorNit(nit);
    console.log(res.count);
    if (res.count < 1) {
        const idTaller = 1;
        const [clienteCreado] = await clienteRepositorio.crearCliente({
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            nit: nit,
            direccion: direccion,
            telefono: telefono,
            idTaller: idTaller
        });
        return clienteCreado;
    }
    return null;

};
// userService.findAuthIdByUserId = async(userid, options = {}) => {
//     const {
//         logger = defaultLogger,
//     } = options;
//     logger.info(`userService.getUsers with ${JSON.stringify(userid)}`);


//     logger.info(`authServices.getOne with ${JSON.stringify(userid)}`);

//     const user = await userRepository.findUserByAuthId(userid);

//     return user;
// };
// userService.findByUserId = async(userid, options = {}) => {
//     const {
//         logger = defaultLogger,
//     } = options;
//     logger.info(`userService.findByUserId with ${JSON.stringify(userid)}`);
//     const [user] = await userRepository.findByUserId(userid);


//     return user;
// };


// userService.updateUser = async(user, userid, options = {}) => {
//     const {
//         logger = defaultLogger,
//     } = options;
//     logger.info(`userService.updateUser with ${JSON.stringify(user)}`);
//     logger.info(`userService.updateUser with ${JSON.stringify(userid)}`);
//     const [client] = await userRepository.updateUser(user, userid);

//     return client;
// };
// userService.resetPassword = async(user, options = {}) => {
//     const {
//         logger = defaultLogger,
//     } = options;
//     logger.info(`userService.resetPassword with ${JSON.stringify(user)}`);
//     const newPassword = Math.random().toString(36).substr(2, 5);
//     const hash = bcrypt.hashSync(newPassword);
//     const emailAuthId = await authRepository.getIdByEmail(user.authEmail);
//     const userAuthId = await userRepository.findAuthIdByUserId(user.userIdentification);
//     const roleid = 1;
//     const data = {
//         authEmail: user.authEmail,
//         authPassword: hash,
//         roleId: roleid,
//     };

//     if (emailAuthId.authId === userAuthId.authId) {
//         const [success] = await authRepository.update(emailAuthId.authId, data);
//         await emailController.sendEmailPassword(user.authEmail, newPassword);
//         console.log(newPassword);


//         return success;
//     }

//     return null;
// };