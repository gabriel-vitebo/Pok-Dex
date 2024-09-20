import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { FilterInput } from "../components/FilterInput";
import { Options } from "../components/Options";

interface PokemonType {
  type: {
    name: string;
  };
}

interface PokemonDetails {
  id: number
  name: string,
  types: string[]
  imageUrl: string
}

interface Pokemon {
  url: string
}

export default function Home() {
  const [pokemons, setPokemons] = useState<PokemonDetails[]>([])
  const [search, setSearch] = useState<string | null>(null)
  const [sortOrder, setSortOrder] = useState<string>('growing')

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20`)
        const data = await response.json()

        const fetchPokemonImage = data.results.map(async (pokemon: Pokemon) => {
          const pokemonResponse = await fetch(pokemon.url)
          const pokemonData = await pokemonResponse.json()

          const pokemonTypes = pokemonData.types.map((pokemonType: PokemonType) => pokemonType.type.name)

          return {
            id: pokemonData.id,
            types: pokemonTypes,
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

  const sortedPokemons = [...pokemons].sort((growing, descending) => {
    if (sortOrder === 'growing') {
      return growing.id - descending.id;
    }
    return descending.id - growing.id;
  })

  return (
    <div className="flex items-center flex-col py-5">
      <FilterInput search={setSearch} />
      <div className="mt-5 flex gap-0.5 mb-1">
        <Options onSelectChange={setSortOrder} />
      </div>
      <main className="w-90p h-[500px] overflow-y-auto flex flex-col gap-3 p-3 bg-default rounded">
        {
          sortedPokemons
            .filter(pokemon => search === null || pokemon.name
              .toLowerCase()
              .includes(search.toLowerCase()) || pokemon.id.toString() === search)
            .map((pokemon) => (
              <Card
                types={pokemon.types}
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