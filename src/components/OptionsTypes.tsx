import { useState } from 'react';
import { pokemonsElement } from '../utils/pokemonsElement'

interface OptionTypesProps {
  onSelectChange: (value: string) => void
  id: string
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

export function OptionsTypes({ onSelectChange, id }: OptionTypesProps) {
  const [bgColor, setBgColor] = useState<string>('black');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectChange(event.target.value)
    setBgColor(elementColors[event.target.value] || "black");
  }

  return (
    <select
      id={id}
      className={`bg-${bgColor} px-4 py-2.5 rounded-3xl text-white`}
      onChange={handleSelectChange}
    >
      <option value="all">Todos os Tipos</option>
      {
        pokemonsElement.map((item, i) => (
          <option key={`${item.titleInEnglish.title}-${i}`} value={item.titleInEnglish.title.toLowerCase()}>{item.titleInPortuguese.title}</option>
        ))
      }
    </select>
  )
}