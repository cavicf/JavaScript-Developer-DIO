class Pokemon {
    id;
    name;
    image;
    principalType;
    types;
}

export function createPokemon(apiData) {
    const pokemon = new Pokemon();

    pokemon.id = apiData.id;
    pokemon.name = apiData.name;
    pokemon.image = apiData.sprites.other['official-artwork'].front_default;
    pokemon.types = apiData.types.map(t => t.type.name);
    pokemon.principalType = pokemon.types[0];
    
    return pokemon;
}