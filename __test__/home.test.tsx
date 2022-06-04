import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("should Pokedex in home", () => {
    render(<Home />);
    const divElement = screen.getByText(/Pokedex/i);
    expect(divElement).toBeInTheDocument();
  });
});
