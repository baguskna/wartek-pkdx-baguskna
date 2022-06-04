import { render, screen } from "@testing-library/react";
import PokemonName from "../pages/[name]";

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: { name: "bulbasaur" },
  }),
}));

describe("Pokemmon detail", () => {
  it("should pokemon detail info", async () => {
    render(<PokemonName />);
    const chevronEl = screen.queryByTestId("chevron");
    expect(chevronEl).toBeDefined();
  });
});
