import { createPokemon } from "../domain/pokemon.js";

// o fecth é o método que faz uma requisição propriamente dita, geralmente de GET que retorna uma promise, ou seja, ele faz uma requisição assincrona que quando estiver pronta retorna o resultado
export async function getPokemonList(limit = 5, offset = 0) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`); // é a url da api, ou seja, estamos passando de onde vamos tirar a informação e qual informação queremos desse servidor

    const jsonBody = await response.json();
    const pokemonList = jsonBody.results;
    
    const pokemons = await Promise.all( // o promise.all recebe um array de promises e espera todas terminarem para poder seguir em diante com o array preenchido
        pokemonList.map(async (pokemonSrc) => {
            const pokemonResponse = await fetch(pokemonSrc.url);
            const pokemonJsonBody = await pokemonResponse.json();
            return createPokemon(pokemonJsonBody); //retorno cada objeto pokemon montado para o array de promises q está aguardando, cono se eu desse um push direto
        })
    );

    return pokemons;
}