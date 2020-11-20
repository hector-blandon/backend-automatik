module.exports = {
    title: 'RegistroFabricante',
    type: 'object',
    properties: {
        nit: {
            type: 'string',
        },
        nombre: {
            type: 'string',
        },
        direccion: {
            type: 'string',
        },
        telefono: {
            type: 'string',
        },
        email: {
            type: 'string',
        },
    },
    required: ['nit', 'nombre', 'direccion', 'telefono', 'email'],
};