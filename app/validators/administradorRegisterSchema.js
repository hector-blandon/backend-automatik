module.exports = {
    title: 'RegistroAdministrador',
    type: 'object',
    properties: {
        nombre: {
            type: 'string',
        },
        apellido: {
            type: 'string',
        },
        correo: {
            type: 'string',
        },
        nit: {
            type: 'string',
        },
        telefono: {
            type: 'string',
        }
    },
    required: ['nombre', 'apellido', 'correo', 'nit', 'telefono'],
};