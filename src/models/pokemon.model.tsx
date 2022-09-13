export interface Ability2 {
  name: string;
  url: string;
}

export interface Ability {
  ability: Ability2;
  is_hidden: boolean;
  slot: number;
}

export interface Item {
  name: string;
  url: string;
}

export interface Species {
  name: string;
  url: string;
}

export interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface PokemonBase {
  name: string;
  url: string;
}

export interface PokemonInfo {
  abilities: Ability[];
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  past_types: any[];
  species: Species;
  sprites: Sprites;
  weight: number;
}
