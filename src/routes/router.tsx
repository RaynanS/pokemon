import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/home/home";
import PokemonDetails from "../components/pokemon-details/pokemonDetails";

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route
          path="/pokemonDetails/:idPokemon"
          exact={true}
          component={PokemonDetails}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
