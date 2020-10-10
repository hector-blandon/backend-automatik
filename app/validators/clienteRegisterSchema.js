module.exports = {
    title: 'RegistroCliente',
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
        direccion: {
            type: 'string',
        },
        telefono: {
            type: 'string',
        }
    },
    required: ['nombre', 'apellido', 'correo', 'nit',
        'direccion', 'telefono'
    ],
};