/*
    ejeccicios basicos
 */

//01
const { emailTemplate } = require('./js-foundation/01-template')
console.log(emailTemplate);

//02
require('./js-foundation/02-destructuracion')

//03
const { getUserById } = require('./js-foundation/03-callbacks')
const id = 2
getUserById(id, function(error, user){
    if(error){
        throw new Error(error)
    }

    console.log(user);
});

//04
const { getUserById2 } = require('./js-foundation/04-arrow')

const id2 = 1;
getUserById2(id2, (error, user) => {
    if(error){
        throw new Error(error);
    }

    console.log(user)
})


//05
require('./js-foundation/05-factoryFunctions')
const { buildMakePerson } = require('./js-foundation/05-factoryFunctions')

const { getDate, getUUID } = require('./plugins') //patron adaptador

const makePerson = buildMakePerson({ getDate, getUUID })//resolver dependencias
const person = makePerson({ name: 'david', birthdate: '1998/04/07' }) //crear persona

console.table(person)

//06
const { getPokemonById } = require('./js-foundation/06-promises')
getPokemonById(2, (name) => {
    console.log(name)
})

//07
const { getPokemonById2 } = require('./js-foundation/07-promisesEnCadena')
getPokemonById2(3)
    .then((pokemon) => console.log(pokemon))
    .catch((err) => console.log("intente nuevamente", err))
    .finally(() => console.log("finalizo 07"));


//08
const { getPokemonById3 } = require('./js-foundation/08-metodoAsyng');
getPokemonById3(6)
    .then((pokemon) => console.log(pokemon))
    .catch((err) => console.log(err))
    .finally(() => console.log('finalizo 08'));


//09
const { getPokemonById4 } = require('./js-foundation/09-metodoPeticionAdaptador')
getPokemonById4(11)
    .then((pokemon) => console.log(pokemon))
    .catch((err) => console.log(err))
    .finally(() => console.log('finalizo 09'));



//10
const { buildLogger } = require('./js-foundation/10-logger')
const logger = buildLogger('app.js')
logger.log('hola mundo')
logger.error('este es un error')