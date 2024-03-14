var getAge = require('get-age')

const getDate = (birthdate) => {
    if(! birthdate){
        return new Error('es necesaria una fecha de nacimiento');
    }

    return getAge(birthdate)
}

module.exports = {
    getDate
}