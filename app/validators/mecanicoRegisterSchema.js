module.exports = {
    title: 'RegistroMecanico',
    type: 'object',
    properties: {
        nombre: {
            type: 'string',
        },
        apellido: {
            type: 'string',
        },
        nit: {
            type: 'string',
        },
        correo: {
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