const express = require('express');
// const log4js = require('log4js');
const morgan = require('morgan');
const ErrorHandlerMiddleware = require('./app/utils/ErrorHandlerMiddleware');
const routers = require('./app/routes');

const { PORT = 3000 } = process.env;

class SERVER {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.start();
        // this.logger = log4js.getLogger('backen_automatik');
    }

    config() {
        this.app.use(express.json());
        this.app.use(morgan('dev'));
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes() {
        this.app.use(routers);
        this.app.use(ErrorHandlerMiddleware.MainHandler);
    }

    start() {
        this.app.listen(PORT, () => {
            console.log('SERVER ON PORT BACKEND: ', PORT);
        });
    }
}

const server = new SERVER();
module.exports = server.app;