import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { StatsCard } from "../components/StatsCard";
import { Tag } from "../components/Tag";
import { useNavigate, useParams } from "react-router-dom";

interface PokemonType {
  type: {
    name: string;
  };
}

interface PokemonAbilityProps {
  ability: {
    name: string;
  };
}

export function Details() {
  const [pokemonName, setPokemonName] = useState<string>('')
  const [pokemonId, setPokemonId] = useState<string>('')
  const [pokemonHeight, setPokemonHeight] = useState<string>('')
  const [pokemonWeight, setPokemonWeight] = useState<number>(0)
  const [pokemonAbilities, setPokemonAbilities] = useState<PokemonAbilityProps[]>([])
  const [pokemonTypes, setPokemonTypes] = useState<PokemonType[]>([])
  const [imageUrl, setImageUrl] = useState<string>('')
  const [background, setBackground] = useState<string>('')

  const navigate = useNavigate()
  const params = useParams()

  function handleBack() {
    navigate(-1)
  }
  function convertHGtoKG(hg: number) {
    const result = hg * 0.1
    setPokemonWeight(result)
  }

  function convertDMtoM(dm: number) {
    const result = dm * 0.1
    setPokemonHeight(`${result.toFixed(2)} M`)
  }

  useEffect(() => {
    const CatchingSpecificPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
        const data = await response.json()

        setImageUrl(data.sprites.other["official-artwork"].front_default)
        setPokemonName(data.name)
        setPokemonId(data.id)
        setPokemonTypes(data.types)
        setPokemonAbilities(data.abilities)
        convertHGtoKG(data.weight)
        convertDMtoM(data.height)

        if (data.types.length > 0) {
          setBackground(data.types[0].type.name.toLowerCase());
        }

      } catch (error) {
        console.error(error)
      }
    }
    CatchingSpecificPokemon()
  }, [])

  const abilitiesString = pokemonAbilities.map((item) => item.ability.name).join(', ')

  return (
    <>
      <Header image={imageUrl} background={background} onClick={() => handleBack()} />
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
                  <Tag title={pokemonType.type.name} key={index} />
                ))
              ) : (
                <p>Carregando</p>
              )
            }
          </div>

          <div className="grid grid-cols-2 gap-4">
            <StatsCard label="Peso" value={`${pokemonWeight.toFixed(2)} KG`} />
            <StatsCard label="Altura" value={`${pokemonHeight}`} />
            <div className="col-span-2">
              <StatsCard label="Habilidades" value={abilitiesString} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

