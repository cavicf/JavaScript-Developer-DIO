
export function PokemonCard(pokemon) {
    const formattedIndex = String(pokemon.id).padStart(3, '0');

    return `
        <article class="pokemon-card ${pokemon.principalType}">
            <div class="card-header">
                <h2>${pokemon.name}</h2>
                <p>#${formattedIndex}</p>
            </div>
            <div class="card-body">
                <div class="card-type-container">
                    ${pokemon.types.map(type => `<span class="card-type ${type}">${type}</span>`).join('')}
                </div>
                <img src="${pokemon.image}" alt="${pokemon.name}" class="pokemon-image">
            </div>
        </article>
    `;
}
