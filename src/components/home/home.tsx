import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getProductsAll } from "../../app/pokemon.slice";
import { AppDispatch } from "../../app/store";
import PokemonList from "../pokemon-list/pokemonList";
import "./home.css";

const Home = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProductsAll());
  });

  return (
    <>
      <Container className="grid-container">
        <PokemonList />
      </Container>
    </>
  );
};
export default Home;
