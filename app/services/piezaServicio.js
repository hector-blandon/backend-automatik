const piezaServicio = module.exports;
const piezaRepositorio = require('../repositories/piezaRepositorio');

piezaServicio.crearPieza = async(pieza) => {
    console.log('piezaServicio.crearPieza');
    const {
        nombre: nombre,
        cantidad: cantidad,
        valor: valor,
        codigo: codigo

    } = pieza;
    const [producto] = await piezaRepositorio.crearPieza({
        nombre: nombre,
        cantidad: cantidad,
        valor: valor,
        codigo: codigo,
        idTaller: 1
    });
    if (producto !== null) {
        return { mensaje: 'Pieza de stock creada correctamente' };
    }

    return null;



};

piezaServicio.buscarPiezas = async(idTaller) => {
    console.log('piezaServicio.buscarPiezas');
    const piezas = await piezaRepositorio.buscarPiezas(idTaller);
    return piezas;
};
piezaServicio.buscarPiezaPorId = async(idPieza) => {
    console.log('piezaServicio.buscarPiezaPorId');
    const pieza = await piezaRepositorio.buscarPiezaPorId(idPieza);
    return pieza;
};

piezaServicio.actualizarPieza = async(pieza, idPieza) => {
    await piezaRepositorio.actualizarPieza(pieza, idPieza);
    return { mensaje: 'Pieza de stock actualizada exitosamente' }
};

piezaServicio.eliminarPieza = async(idPieza) => {
    await piezaRepositorio.eliminarPieza(idPieza);
    return { mensaje: 'Pieza de stock Eliminada exitosamente' }
};