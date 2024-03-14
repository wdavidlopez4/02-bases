/*
    creamos el log, lo hacemos utilizando el patron adaptador,
    dode la funcion buildLogger se le inyecta el servicio 
    y la funcion LOG se le pasa el mensaje del log

    el servicio que se le inyecta es donde se va a llamar este metodo, 
    por ejemplo desde el app.js
 */


const { logger } = require('../plugins')


const buildLogger = (service) =>{

    return{
        log: (message) =>{
            logger.log('info', { message, service })
        },

        error: (message) =>{
            logger.error('error', { message, service })
        }
    }
} 

module.exports = {
    buildLogger
}