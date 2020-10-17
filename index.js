const express = require('express');
const bodyParser = require('body-parser');
// const log4js = require('log4js');
const morgan = require('morgan');
const cors = require('cors');
const ErrorHandlerMiddleware = require('./app/utils/ErrorHandlerMiddleware');
const routers = require('./app/routes');
const { PREFIX } = require('./app/config/AppConfig');

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
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });
    }

    routes() {
        this.app.use(PREFIX, routers);
        this.app.use(ErrorHandlerMiddleware.MainHandler);
        this.app.use(cors());
    }

    start() {
        this.app.listen(PORT, () => {
            console.log('SERVER ON PORT BACKEND: ', PORT);
        });
    }
}

const server = new SERVER();
module.exports = server.app;