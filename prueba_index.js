var mysql = require('mysql');
var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'automatik',
    user: 'root',
    password: ''
});

conexion.connect(function(error) {
    if (error) {
        throw error;
    } else {
        console.log('Conexión establecida');
    }

});
conexion.query(`INSERT into taller(nombre,nit,direccion,telefono) VALUES('taller 2','123456','cali','321456')`);
conexion.query('SELECT * from taller', function(error, results) {
    if (error) {
        throw error;
    } else {
        results.forEach(result => {
            console.log(result);
        });
    }
});

conexion.end();