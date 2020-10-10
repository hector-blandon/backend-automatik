const MAX_CONNECTION_POOLSIZE = 5;
const conexion = module.exports;

const {
    DB_NAME = 'automatik',
        DB_USER = 'root',
        DB_PASS = '',
        DB_HOST = 'localhost',
        DB_PORT = 5432,
} = process.env;

module.exports = {
    client: 'mysql',
    connection: `mysql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    pool: { min: 1, max: MAX_CONNECTION_POOLSIZE },
    acquireConnectionTimeout: 5000,
};