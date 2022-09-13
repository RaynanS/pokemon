import axios from "axios";
import { urlPokemon } from "./api-routes";

export const fetchPokemonAll = async (): Promise<any> => {
  return axios
    .get(`${urlPokemon}`)
    .then((res) => {
      return res.data;
    })
    .catch();
};

export const fetchPokemonByName = async (idPokemon: string): Promise<any> => {
  return axios
    .get(`${urlPokemon}/${idPokemon}`)
    .then((res) => {
      return res.data;
    })
    .catch();
};
