const servicioControlador = module.exports;
const servicioServicio = require('../services/servicioServicio');
const { BaseError } = require('../utils/ErrorHandlerMiddleware');
const Validator = require('../validators/validator');


servicioControlador.crearServicio = async(req, res, next) => {
    console.log('servicioControlador.crearServicio');
    const { body } = req;
    try {
        return servicioServicio.crearServicio(body)
            .then((response) => res.send(response))
            .catch((error) => next(new BaseError(error.message)));
    } catch (error) {
        return next(error);
    }
};
servicioControlador.buscarServicios = async(req, res, next) => {
    console.log('servicioControlador.buscarServicios');
    const { idTaller } = req.params;
    return servicioServicio.buscarServicios(idTaller)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};
servicioControlador.buscarServiciosPorIdCliente = async(req, res, next) => {
    console.log('servicioControlador.buscarServiciosPorIdCliente');
    const { idCliente } = req.params;
    return servicioServicio.buscarServiciosPorIdCliente(idCliente)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};
servicioControlador.buscarServiciosPorIdMecanico = async(req, res, next) => {
    console.log('servicioControlador.buscarServiciosPorIdMecanico');
    const { idMecanico } = req.params;
    return servicioServicio.buscarServiciosPorIdMecanico(idMecanico)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};
servicioControlador.buscarServiciosPorIdFactura = async(req, res, next) => {
    console.log('servicioControlador.buscarServiciosPorIdFactura');
    const { idFactura } = req.params;
    return servicioServicio.buscarServiciosPorIdFactura(idFactura)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};
servicioControlador.buscarServiciosPorIdVehiculo = async(req, res, next) => {
    console.log('servicioControlador.buscarServiciosPorIdVehiculo');
    const { idVehiculo } = req.params;
    return servicioServicio.buscarServiciosPorIdVehiculo(idVehiculo)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};
servicioControlador.buscarServiciosPorId = async(req, res, next) => {
    console.log('servicioControlador.buscarServiciosPorId');
    const { idServicio } = req.params;
    return servicioServicio.buscarServiciosPorId(idServicio)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};
servicioControlador.actualizarServicio = async(req, res) => {
    const { body } = req;
    const { idServicio } = req.params;
    return servicioServicio.actualizarServicio(body, idServicio)
        .then((response) => res.send(response));
};
servicioControlador.archivarServicio = async(req, res) => {
    const { body } = req;
    const { idServicio } = req.params;
    return servicioServicio.archivarServicio(body, idServicio)
        .then((response) => res.send(response));
};