import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { FilterInput } from "../components/FilterInput";
import { OptionsOrder } from "../components/OptionsOrder";
import { OptionsTypes } from "../components/OptionsTypes";
import { useNavigate } from "react-router-dom";

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
  const [filterTypes, setFilterTypes] = useState<string>('all')

  const navigate = useNavigate()

  // TODO: Terminar de pegar as informações da API
  // Converter hg para kg e dm para metros

  function handleDetails(id: number) {
    navigate(`/details/${id}`)
  }


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

  const filteredAndSortedPokemons = [...pokemons]
    .filter(pokemon => filterTypes == 'all' || pokemon.types.includes(filterTypes))
    .filter(pokemon => search === null || pokemon.name.toLowerCase().includes(search.toLowerCase()) || pokemon.id.toString() === search)
    .sort((growing, descending) => {
      if (sortOrder === "growing") {
        return growing.id - descending.id;
      }
      return descending.id - growing.id;
    });


  return (
    <div className="flex items-center flex-col py-5">
      <FilterInput search={setSearch} />
      <div className="mt-5 flex gap-0.5 mb-1">
        <OptionsTypes id="types" onSelectChange={setFilterTypes} />
        <OptionsOrder id="order" onSelectChange={setSortOrder} />
      </div>
      <main className="w-90p h-[500px] overflow-y-auto flex flex-col gap-3 p-3 bg-default rounded">
        {
          filteredAndSortedPokemons
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
                onClick={() => handleDetails(pokemon.id)}
              />
            ))
        }
      </main>

    </div>
  )
}