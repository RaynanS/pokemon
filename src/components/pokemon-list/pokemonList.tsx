import { useEffect } from "react";
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
  const pokemonSlice = useSelector(selectPokemon);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProductsAll());
  }, []);

  useEffect(() => {
    if (pokemonSlice.data.pokemon.length > 0) {
      pokemonSlice.data.pokemon.map((pokemon) =>
        dispatch(
          getPokemonInfo({
            idPokemon: pokemon.name,
          })
        )
      );
    }
  }, [pokemonSlice.data.pokemon]);

  return (
    <>
      {pokemonSlice.data && (
        <div className="info">
          {pokemonSlice.data.pokemonInfo.map((pokemon) => (
            <>
              <img
                className="pokemons-image"
                src={pokemon.sprites.front_default}
              />
              <Link to={`/pokemonDetails/${pokemon.name}`}>
                <h1>{pokemon.name}</h1>
              </Link>
            </>
          ))}
        </div>
      )}
    </>
  );
};
export default PokemonList;
