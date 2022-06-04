import { render, screen } from "@testing-library/react";
import PokemonCard from "../components/pokemon-card";
import Home from "../pages/index";
import { mockPokemonData } from "./mock";

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
