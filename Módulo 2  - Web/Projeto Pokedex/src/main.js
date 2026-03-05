import {getPokemonList} from "./data/PokemonRepository.js";
import {HomeContainer} from "./presentation/containers/Home/HomeContainer.js";
import {PokemonCard} from "./presentation/components/PokemonCard/PokemonCard.js"

const home = document.getElementById('homeContainer');
const loadMoreButton = document.getElementById('loadMore');

const limit = 4;
let offset = 0;
const pokemonList = await getPokemonList(limit, offset);

const homeHTML = HomeContainer(pokemonList);
home.innerHTML = homeHTML;
const pokemonsList = document.getElementById('pokemonsList');

loadMoreButton.addEventListener('click', async () => {
    offset += limit;
    const newPokemons = await getPokemonList(limit, offset);
    const pokemonsCard = newPokemons.map((pokemon) => PokemonCard(pokemon)).join('');
    pokemonsList.innerHTML += pokemonsCard;
})
