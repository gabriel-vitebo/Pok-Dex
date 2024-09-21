import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { StatsCard } from "../components/StatsCard";
import { Tag } from "../components/Tag";

interface PokemonType {
  type: {
    name: string;
  };
}

export function Details() {
  const [pokemonName, setPokemonName] = useState<string>('')
  const [pokemonId, setPokemonId] = useState<string>('')
  const [pokemonTypes, setPokemonTypes] = useState<PokemonType[]>([])
  const [imageUrl, setImageUrl] = useState<string>('')

  useEffect(() => {
    const CatchingSpecificPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`)
        const data = await response.json()
        console.log({ data })

        setImageUrl(data.sprites.other["official-artwork"].front_default)
        setPokemonName(data.name)
        setPokemonId(data.id)
        setPokemonTypes(data.types)
        console.log(pokemonTypes)

      } catch (error) {
        console.error(error)
      }
    }
    CatchingSpecificPokemon()
  }, [])

  return (
    <>
      <Header image={imageUrl} />
      <main className="mt-16 mx-4 text-gray-800">
        <div className="bg-card p-6 rounded-xl shadow-lg relative max-w-sm mx-auto">
          <div className="text-center mt-2">
            <h1 className="text-3xl font-bold">{pokemonName}</h1>
            <p className="text-gray-500">{`Nº${pokemonId}`}</p>
          </div>

          <div className="flex justify-center space-x-2 my-4">
            {
              pokemonTypes.length > 0 ? (
                pokemonTypes.map((pokemonType, index) => (
                  <Tag title={pokemonType.type.name} typeColor={pokemonType.type.name} key={index} />
                ))
              ) : (
                <p>Carregando</p>
              )
            }
          </div>

          <div className="grid grid-cols-2 gap-4">
            <StatsCard label="Peso" value="6,9 kg" />
            <StatsCard label="Altura" value="0,7 m" />
            <StatsCard label="Categoria" value="Seed" />
            <StatsCard label="Habilidade" value="Overgrow" />
          </div>
        </div>
      </main>
    </>
  );
}

