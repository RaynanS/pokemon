import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonInfo, selectPokemon } from "../../app/pokemon.slice";
import { AppDispatch } from "../../app/store";
import "./pokemonDetails.css";

const PokemonDetails = (): JSX.Element => {
  const pokemonSlice = useSelector(selectPokemon);

  const dispatch = useDispatch<AppDispatch>();

  const idPokemon = useParams<{ idPokemon: string }>().idPokemon;

  useEffect(() => {
    dispatch(
      getPokemonInfo({
        idPokemon: idPokemon,
      })
    );
  }, [idPokemon]);

  const pokemon = pokemonSlice.data.pokemonInfo;

  console.log(idPokemon);

  return (
    <>
      {pokemon && <div className="SEILA">OIEEEE</div>}

      <div className="info">
        <>
          {/* <img
                className="pokemons-image"
                src={pokemon.sprites.front_default}
              /> */}
          {/* <h1>{pokemon.name}</h1>
          <h1>{pokemon.height}</h1>
          <h1>{pokemon.weight}</h1> */}
        </>
      </div>
    </>
  );
};
export default PokemonDetails;
