import { Handler } from "@netlify/functions";

import fetch from "node-fetch";

const handler: Handler = async (event, context) => {
  const pokeDataApi = await fetch("https://pokeapi.co/api/v2/pokedex/2/").then(
    (response) => response.json()
  );

  const pokeData = (pokeDataApi.pokemon_entries || []).map((pokemon) => {
    const pokemonName =
      pokemon.pokemon_species.name[0].toUpperCase() +
      pokemon.pokemon_species.name.substring(1);
    return {
      id: pokemon.entry_number,
      name: pokemonName,
    };
  });

  return {
    statusCode: 200,
    body: JSON.stringify(pokeData),
  };
};

export { handler };
