import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { FilterInput } from "../components/FilterInput";
import { Options } from "../components/Options";

// TODO: A API retorna o tipo dos pokemons, tenho q pega os tipos e passar para o card e a Tag

interface PokemonDetails {
  id: number
  name: string,
  type: string[]
  imageUrl: string
}

interface Pokemon {
  url: string
}

export default function Home() {
  const [pokemons, setPokemons] = useState<PokemonDetails[]>([])
  const [search, setSearch] = useState<string | null>(null)

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20`)
        const data = await response.json()

        const fetchPokemonImage = data.results.map(async (pokemon: Pokemon) => {
          const pokemonResponse = await fetch(pokemon.url)
          const pokemonData = await pokemonResponse.json()

          return {
            id: pokemonData.id,
            type: pokemonData.type,
            name: pokemonData.name,
            imageUrl: pokemonData.sprites.other["official-artwork"].front_default
          };
        })

        const pokemonResults = await Promise.all(fetchPokemonImage)
        setPokemons(pokemonResults)
      } catch (error) {
        console.error(error)
      }
    }
    fetchPokemons()
  }, [])

  return (
    <div className="flex items-center flex-col py-5">
      <FilterInput search={setSearch} />
      <div className="mt-5 flex gap-0.5">
        <Options />
      </div>
      <main className="w-90p h-[500px] overflow-y-auto flex flex-col gap-3 p-3 bg-default rounded">
        {
          pokemons
            .filter(pokemon => search === null || pokemon.name
              .toLowerCase()
              .includes(search.toLowerCase()))
            .map((pokemon) => (
              <Card
                id={pokemon.id}
                key={pokemon.id}
                name={pokemon.name}
                image={pokemon.imageUrl}
              />
            ))
        }
      </main>

    </div>
  )
}