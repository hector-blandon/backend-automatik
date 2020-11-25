const MAX_CONNECTION_POOLSIZE = 5;

const {
    // DB_NAME = 'automatik',
    //     DB_USER = 'postgres',
    //     DB_PASS = '123456',
    //     DB_HOST = 'localhost',
    //     DB_PORT = 5432,
    DB_NAME = 'd3p941o1hdj9ve',
    DB_USER = 'ubfqjhmiktpikb',
    DB_PASS = '8728593844af58e2e0361a7d7dc5fd16edd97248bdbb736beaa5657efee1f0c7',
    DB_HOST = 'ec2-3-95-87-221.compute-1.amazonaws.com',
    DB_PORT = 5432,
} = process.env;

module.exports = {
    client: 'pg',
    connection: `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    // connection: `postgres://ubfqjhmiktpikb:8728593844af58e2e0361a7d7dc5fd16edd97248bdbb736beaa5657efee1f0c7@ec2-3-95-87-221.compute-1.amazonaws.com:5432/d3p941o1hdj9ve`,
    pool: { min: 1, max: MAX_CONNECTION_POOLSIZE },
    acquireConnectionTimeout: 5000,
};
