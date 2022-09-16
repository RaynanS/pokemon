import { Container } from "react-bootstrap";
import PokemonList from "../pokemon-list/pokemonList";
import "./home.css";

const Home = (): JSX.Element => {
  return (
    <>
      <Container className="grid-container">
        <PokemonList />
      </Container>
    </>
  );
};
export default Home;
