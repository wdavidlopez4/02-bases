/*
    promesas en cadena
 */


const getPokemonById2 = (id) =>{
    const url = ` https://pokeapi.co/api/v2/pokemon/${id}` ;

    return fetch(url)
        .then((respuest) => respuest.json())
        .then((pokemon) => pokemon.name);
}

module.exports = {
    getPokemonById2
}