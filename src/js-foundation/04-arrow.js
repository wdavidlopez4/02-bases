/**
 * crear una funcion de flecha para buscar usuario por id
 */

const users = [
    {
        id: 1,
        nombre: 'david'
    },
    {
        id: 2,
        nombre: 'jorge'
    },
]

const getUserById2 = ( id,  callback ) => {
    const user = users.find((user) => user.id === id );

    (user)
    ? callback(null, user)
    : callback("usuario no existe");
}

module.exports ={
    getUserById2
}