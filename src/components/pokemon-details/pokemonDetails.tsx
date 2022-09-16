import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPokemonInfo, selectPokemon } from "../../app/pokemon.slice";
import { AppDispatch } from "../../app/store";
import { PokemonInfo } from "../../models/pokemon.model";
import "./pokemonDetails.css";

const PokemonDetails = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const pokemonSlice = useSelector(selectPokemon);

  const idPokemon = useParams<{ idPokemon: keyof PokemonInfo }>().idPokemon;

  const [pokemon, setPokemon] = useState<PokemonInfo>({} as PokemonInfo);

  useEffect(() => {
    if (!pokemonSlice.data.pokemonInfo[idPokemon]) {
      dispatch(
        getPokemonInfo({
          idPokemon: idPokemon,
        })
      );
    }
  }, []);

  useEffect(() => {
    setPokemon(pokemonSlice.data.pokemonInfo[idPokemon]);
  }, [pokemonSlice.data.pokemonInfo[idPokemon]]);

  return (
    <>
      {pokemon && (
        <>
          <div className="info-details">
            <div className="volte">
              <Link to="/">
                <h1 className="texto-voltar">Voltar</h1>
              </Link>
            </div>
            <Card className="cartao">
              <img
                className="pokemons-image-details"
                src={pokemon?.sprites?.front_default}
              />
              <div className="details">
                <h1 className="titulo">Nome:&nbsp;{pokemon.name}&nbsp;</h1>
                <h1 className="titulo">
                  Altura:&nbsp;{pokemon.height}&nbsp;cm
                </h1>
                <h1 className="titulo">Peso:&nbsp;{pokemon.weight}&nbsp;KG</h1>
              </div>
            </Card>
          </div>
        </>
      )}
    </>
  );
};
export default PokemonDetails;
