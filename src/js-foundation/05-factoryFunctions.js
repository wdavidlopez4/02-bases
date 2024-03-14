/*
    la funcion buildMakePerson resulve las dependencias para crear una persona,
    se le pasan por parametro

    dentro de la funcion buildMakePerson existe una arrow funccion que crea retorna la
    persona, para crear la persona se debe pasar nombre y fecha

    como observamos estamos desacoplando la creacion de la persona, no necesitamos
    llamar funciones externas para calcular la fecha ni el id

    en este caso utilizamos el patron adabtador y las factury functions
 */


const buildMakePerson = ({getDate, getUUID}) => {
    return ({ name, birthdate }) => {

        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getDate(birthdate)
        }
    }
}

module.exports ={
    buildMakePerson
}