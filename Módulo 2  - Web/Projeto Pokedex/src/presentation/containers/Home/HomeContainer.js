import { PokemonCard } from "../../components/PokemonCard/PokemonCard.js";

export function HomeContainer(pokemonList) {
    return `
        <section class="home-content">
            <div id="pokemonsList" class="pokemon-list">
                ${pokemonList.map(pokemon => PokemonCard(pokemon)).join('')}
            </div>
        </section>

    `
}