import { css } from "@emotion/react";
import type { NextPage } from "next";
import { useEffect } from "react";
import LayoutWrapper from "../components/layout-wrapper";
import PokemonCard from "../components/pokemon-card";
import { Skeleton } from "../lib/styles";
import { usePokemons } from "../shared/hooks";
import { PokemonDetail } from "../shared/interfaces";

const pokemonContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
`;

const headingStyles = css`
  margin-top: 24px;
`;

const isLoadingContainer = () => {
  return Array.from({ length: 20 }).map((u, i) => <Skeleton key={i} />);
};

const Home: NextPage = () => {
  const { data, setLimit, error } = usePokemons();

  useEffect(() => {
    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setLimit((prevState) => {
          return prevState + 10;
        });
      }
    };
  });

  return (
    <LayoutWrapper>
      <div>
        <h1 css={headingStyles}>Pokedex ( {data?.length} )</h1>
        <div css={pokemonContainer}>
          {!data
            ? isLoadingContainer()
            : data?.map((pokemon: PokemonDetail) => {
                return <PokemonCard key={pokemon.name} data={pokemon} />;
              })}
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default Home;
