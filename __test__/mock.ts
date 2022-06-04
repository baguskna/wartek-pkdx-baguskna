import { PokemonDetail } from "../shared/interfaces";

export const mockPokemonData: PokemonDetail = {
  id: "1",
  name: "bulbasaur",
  types: [
    {
      type: {
        name: "grass",
      },
    },
  ],
  height: 14,
  weight: 69,
  abilities: [
    {
      ability: {
        name: "chlorophyll",
      },
    },
  ],
  stats: [
    {
      base_stat: 45,
      stat: {
        name: "speed",
      },
    },
  ],
};
