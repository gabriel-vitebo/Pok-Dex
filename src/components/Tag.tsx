import { useEffect, useState } from "react"
import { pokemonsElement } from "../utils/pokemonsElement"

interface TagProps {
  title: string
}

const elementColors: { [key: string]: string } = {
  water: "water",
  dragon: "dragon",
  electric: "electric",
  fairy: "fairy",
  ghost: "ghost",
  fire: "fire",
  ice: "ice",
  grass: "grass",
  bug: "bug",
  fighting: "fighting",
  normal: "normal",
  dark: "dark",
  steel: "steel",
  rock: "rock",
  psychic: "psychic",
  ground: "ground",
  poison: "poison",
  flying: "flying",
};

export function Tag({ title }: TagProps) {
  const [transformTitle, setTransformTitle] = useState<string>('')
  const [bgColor, setBgColor] = useState<string>('black');

  useEffect(() => {
    const pokemon = pokemonsElement.find(element =>
      title.toLowerCase() === element.titleInEnglish.title.toLowerCase()
    )

    if (pokemon) {
      setTransformTitle(pokemon.titleInPortuguese.title)
      setBgColor(elementColors[pokemon.titleInEnglish.title.toLowerCase()] || "black");
    } else {
      setTransformTitle(title)
    }
  }, [title])

  return (
    <div className={`flex items-center gap-2 bg-${bgColor} rounded-3xl justify-center p-2`}>
      <p>{transformTitle}</p>
      <div className=' bg-white rounded-full p-1'>
        <img src={`/src/assets/elements/${bgColor}.svg`} alt={`${title} icon`} className='w-6 h-6 object-fill' />
      </div>
    </div>
  )
}