import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getPokemonInfo,
  getProductsAll,
  selectPokemon,
} from "../../app/pokemon.slice";
import { AppDispatch } from "../../app/store";
import "./pokemonList.css";

const PokemonList = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const pokemonSlice = useSelector(selectPokemon);

  const [gotPokemon, setGotPokemon] = useState(false);

  useEffect(() => {
    dispatch(getProductsAll());
  }, []);

  useEffect(() => {
    if (pokemonSlice.data.pokemon.length > 0) {
      if (!gotPokemon) {
        setGotPokemon(true);
        pokemonSlice.data.pokemon.map((pokemon) =>
          dispatch(
            getPokemonInfo({
              idPokemon: pokemon.name,
            })
          )
        );
      }
    }
  }, [pokemonSlice.data.pokemon]);

  return (
    <>
      {Object.entries(pokemonSlice.data.pokemonInfo).map((pokemon, idPoke) => (
        <div key={idPoke} className="info">
          <img
            alt={""}
            className="pokemons-image"
            src={pokemon[1].sprites.front_default}
          />
          <Link
            to={`/pokemonDetails/${pokemon[1].name}`}
            className="nome-pokemon"
          >
            {pokemon[0]}
          </Link>
        </div>
      ))}
    </>
  );
};
export default PokemonList;
