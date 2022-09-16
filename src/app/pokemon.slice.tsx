import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPokemonAll, fetchPokemonByName } from "../api/api";
import { PokemonBase, PokemonInfoBase } from "../models/pokemon.model";
import { RootState } from "./store";

interface pokemonInitialState {
  data: {
    pokemon: PokemonBase[];
    pokemonInfo: PokemonInfoBase;
  };
}

const initialState: pokemonInitialState = {
  data: {
    pokemon: [] as PokemonBase[],
    pokemonInfo: {} as PokemonInfoBase,
  },
};

export const getProductsAll = createAsyncThunk(
  "pokemon/getProductsAll",
  async () => {
    return await fetchPokemonAll();
  }
);

export const getPokemonInfo = createAsyncThunk(
  "pokemon/getPokemonInfo",
  async ({ idPokemon }: { idPokemon: string }) => {
    return await fetchPokemonByName(idPokemon);
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsAll.fulfilled, (state, action) => {
        state.data.pokemon = action.payload.results;
      })
      .addCase(getPokemonInfo.fulfilled, (state, action) => {
        state.data.pokemonInfo[action.payload.name] = action.payload;
      });
  },
});

export const {} = pokemonSlice.actions;

export const selectPokemon = (state: RootState): pokemonInitialState =>
  state.pokemon;

export default pokemonSlice.reducer;
