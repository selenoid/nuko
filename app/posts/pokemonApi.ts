import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define the Post type
export interface Post {
  id: string;
  title?: string;
  content?: string;
  // Add other fields as needed
}

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (build) => ({
    getPokemonByName: build.query<{ name: string; [key: string]: any }, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

export const { useGetPokemonByNameQuery } = pokemonApi
