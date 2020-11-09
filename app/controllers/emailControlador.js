const emailControlador = module.exports;
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'latamsoftware1@gmail.com',
        pass: 'Latam123$',
    },
});


// emailControlador.sendEmail = function(req, res) {
//     const { body } = req;
//     // const transporter = nodemailer.createTransport({
//     //     service: 'Gmail',
//     //     auth: {
//     //         user: 'latamsoftware1@gmail.com',
//     //         pass: 'Latam123$',
//     //     },
//     // });
//     const mailOptions = {
//         from: 'latamsoftware1@gmail.com',
//         to: body.email,
//         subject: 'Envíe sus documentos y lo contactaremos',
//         text: 'Para ser vendedor debe enviar los siguientes documentos al correo : caseritosTeam@hotmail.com' +
//             '\n* Nombre completo del propietario' +
//             '\n* Nombre completo del propietario' +
//             '\n* Scanner del documento del propietario' +
//             '\n* Nombre del restaurante' +
//             '\n* Slogan del restaurante' +
//             '\n* Dirección y teléfono del restaurante' +
//             '\n* Fotografia del restaurante' +
//             '\n* Horarios de atención' +
//             '\n* Scanner del RUT' +
//             '\n* Scanner de la cámara de comercio' +
//             '\n* Scanner del certificado de sanidad y salubridad',
//     };
//     transporter.sendMail(mailOptions, (error) => {
//         if (error) {
//             console.log(error);
//             res.send(500, error.message);
//         } else {
//             console.log('Correo Electrónico enviado');
//             res.status(200).jsonp(req.body);
//         }
//     });
// };

// emailControlador.resetPassword = (email, password) => {
//     const mailOptions = {
//         from: 'latamsoftware1@gmail.com',
//         to: email,
//         subject: 'Restablecimiento de Contraseña',
//         text: `${'Su nueva contraseña es :'
//     + '\n'}${password}\nNo olvide cambiarla cuando inicie sesión`
//     };
//     transporter.sendMail(mailOptions, (error) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Correo Electrónico enviado');
//         }
//     });
// };
emailControlador.resetPassword = (email, password) => {
    const mailOptions = {
        from: 'latamsoftware1@gmail.com',
        to: email,
        subject: 'Restablecimiento de Contraseña',
        //     text: `${'Su nueva contraseña es :'
        // + '\n'}${password}\nNo olvide cambiarla cuando inicie sesión`
        html: `<!DOCTYPE html>
        <html>
        <head>
            <title> Template</title>
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet"> 
            <style type="text/css">
                body { font-family: 'Roboto', sans-serif; background: #f5f5f5;  }
            </style>
        </head>
        <body>
        <td class="esd-structure es-p40t es-p20r es-p20l" align="center" bgcolor="#ffffff" style="background-color: #ffffff;" esdev-config="h13">
            <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                <tbody>
                    <tr>
                        <td width="270" class="esd-container-frame" align="center">
                            <table cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                    <tr>
                                        <td align="center" class="esd-block-image" valign="top" style="font-size: 0px;">
                                            <a target="_blank" href="https://viewstripo.email"><img src="https://tlr.stripocdn.email/content/guids/CABINET_af1ea23f103f40fcdacc1928c631e097/images/87581578489757145.png" style="display: block; border-radius: 10px 0px;" alt class="b_image adapt-img" width="170"></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table cellpadding="0" cellspacing="0" class="es-center" align="center">
                <tbody>
                    <tr>
                        <td *ngIf="false" width="270" align="center" class="esd-container-frame">
                            <table cellpadding="0" cellspacing="0" width="100%">
                               
                                    <tr>
                                        <td align="center" class="esd-block-text es-p20t" esd-links-underline="none" esd-links-color="#000000">
                                            <br>
                                            <h3 class="b_title"><a target="_blank" style="text-decoration: none; color: #000000;" href="https://viewstripo.email">¿Olvidaste tu contraseña?</a></h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" class="esd-block-text es-p10t">
                                            <p class="b_description" style= "font-family : Roboto; font-size:26px">No te preocupes, aqui te enviamos una nueva contraseña
                                                <br>
                                                contraseña: <b>${password}</b>
                                            </p>
                                        </td>
                                    </tr>
                                    <br>
                                    <br>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
        </body>
        </html>
    
    `
    };
    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Correo Electrónico enviado');
        }
    });
};


emailControlador.claimVehicle = (email) => {
    const mailOptions = {
        from: 'latamsoftware1@gmail.com',
        to: email,
        subject: 'Notificación entrega de vehículo',
        html: `<!DOCTYPE html>
        <html>
        <head>
            <title> Template</title>
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet"> 
            <style type="text/css">
                body { font-family: 'Roboto', sans-serif; background: #f5f5f5;  }
            </style>
        </head>
        <body>
        <td class="esd-structure es-p40t es-p20r es-p20l" align="center" bgcolor="#ffffff" style="background-color: #ffffff;" esdev-config="h13">
            <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                <tbody>
                    <tr>
                        <td width="270" class="esd-container-frame" align="center">
                            <table cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                    <tr>
                                        <td align="center" class="esd-block-image" valign="top" style="font-size: 0px;">
                                            <a target="_blank" href="https://viewstripo.email"><img src="https://tlr.stripocdn.email/content/guids/CABINET_af1ea23f103f40fcdacc1928c631e097/images/87581578489757145.png" style="display: block; border-radius: 10px 0px;" alt class="b_image adapt-img" width="170"></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table cellpadding="0" cellspacing="0" class="es-center" align="center">
                <tbody>
                    <tr>
                        <td *ngIf="false" width="270" align="center" class="esd-container-frame">
                            <table cellpadding="0" cellspacing="0" width="100%">
                               
                                    <tr>
                                        <td align="center" class="esd-block-text es-p20t" esd-links-underline="none" esd-links-color="#000000">
                                            <br>
                                            <h3 class="b_title"><a target="_blank" style="text-decoration: none; color: #000000;" href="https://viewstripo.email">Tu vehículo esta listo!</a></h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" class="esd-block-text es-p10t">
                                            <p class="b_description" style= "font-family : Roboto; font-size:26px">Nos complace informarte que tu vehículo ha sido reparado, puedes acercarte a nuestra sucursal para  retirarlo
                                                <br>
                                                Anexo, encontraras los detalles de los servicios recibidos con la respectiva factura
                                            </p>
                                        </td>
                                    </tr>
                                    <br>
                                    <br>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
        </body>
        </html>

    
    `
    };
    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Correo Electrónico enviado');
        }
    });
};