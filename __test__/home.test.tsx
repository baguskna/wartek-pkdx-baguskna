import { render, screen } from "@testing-library/react";
import PokemonCard from "../components/pokemon-card";
import Home from "../pages/index";
import { PokemonDetail } from "../shared/interfaces";

const mockPokemonData: PokemonDetail = {
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

describe("Home", () => {
  it("should Pokedex in home", () => {
    render(<Home />);
    const divElement = screen.getByText(/Pokedex/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should render card in home", () => {
    render(<PokemonCard data={mockPokemonData} />);
    const nameElement = screen.getByText(/bulbasaur/i);
    const numberElement = screen.getByText(/1/i);
    const typeElement = screen.getByText(/grass/i);
    expect(nameElement).toBeInTheDocument();
    expect(numberElement).toBeInTheDocument();
    expect(typeElement).toBeInTheDocument();
  });
});
