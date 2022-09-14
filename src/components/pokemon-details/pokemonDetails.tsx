import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonInfo, selectPokemon } from "../../app/pokemon.slice";
import { AppDispatch } from "../../app/store";
import "./pokemonDetails.css";

const PokemonDetails = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const pokemonSlice = useSelector(selectPokemon);

  const idPokemon = useParams<{ idPokemon: string }>().idPokemon;

  console.log(idPokemon);

  useEffect(() => {
    console.log("entrei no dispatch")
    dispatch(
      getPokemonInfo({
        idPokemon: idPokemon,
      })
    );
  }, [dispatch, idPokemon]);

  const pokemon = pokemonSlice.data.pokemonInfo[4];

  console.log(pokemon);

  return (
    <>
      {/* {pokemon && (<div className="SEILA">{pokemon.name}</div>)} */}

      <div className="info">
        <>
          {/* <img
                className="pokemons-image"
                src={pokemon.sprites.front_default}
              /> */}
          <p>{pokemon.name}</p>
          {/* <h1>{pokemon.name}</h1>
          <h1>{pokemon.height}</h1>
          <h1>{pokemon.weight}</h1> */}
        </>
      </div>
    </>
  );
};
export default PokemonDetails;
