const { getDate } = require('./get-age.plugin')
const { getUUID } = require('./get-id.plugin');
const { http } = require('./http-client.plugin')
const { logger } = require('./logger.plugin')

module.exports = {
    getDate,
    getUUID,
    http,
    logger
}