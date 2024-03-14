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

function getUserById( id,  callback ){
    const user = users.find(function(user) {
        return user.id === id;
    });

    if(! user){
        return callback("usuario no existe");
    }

    callback(null, user)
}

module.exports ={
    getUserById
}