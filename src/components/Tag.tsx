import { useEffect, useState } from "react"
import { pokemonsElement } from "../utils/pokemonsElement"
import { WaterIcon } from "./Elements/WaterIcon";
import { DragonIcon } from "./Elements/DragonIcon";
import { ElectricIcon } from "./Elements/ElectricIcon";
import { FairyIcon } from "./Elements/FairyIcon";
import { GhostIcon } from "./Elements/GhostIcon";
import { FireIcon } from "./Elements/FireIcon";
import { IceIcon } from "./Elements/IceIcon";
import { GrassIcon } from "./Elements/GrassIcon";
import { BugIcon } from "./Elements/BugIcon";
import { FightingIcon } from "./Elements/FightingIcon";
import { NormalIcon } from "./Elements/NormalIcon";
import { DarkIcon } from "./Elements/DarkIcon";
import { SteelIcon } from "./Elements/SteelIcon";
import { RockIcon } from "./Elements/RockIcon";
import { PsychicIcon } from "./Elements/PsychicIcon";
import { GroundIcon } from "./Elements/GroundIcon";
import { PoisonIcon } from "./Elements/PoisonIcon";
import { FlyingIcon } from "./Elements/FlyingIcon";

type ElementType =
  | "water"
  | "dragon"
  | "electric"
  | "fairy"
  | "ghost"
  | "fire"
  | "ice"
  | "grass"
  | "bug"
  | "fighting"
  | "normal"
  | "dark"
  | "steel"
  | "rock"
  | "psychic"
  | "ground"
  | "poison"
  | "flying";

interface TagProps {
  title: string
}

const elementColors: { [key in ElementType]: string } = {
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

const elementIcons: { [key in ElementType]: JSX.Element } = {
  water: <WaterIcon />,
  dragon: <DragonIcon />,
  electric: <ElectricIcon />,
  fairy: <FairyIcon />,
  ghost: <GhostIcon />,
  fire: <FireIcon />,
  ice: <IceIcon />,
  grass: <GrassIcon />,
  bug: <BugIcon />,
  fighting: <FightingIcon />,
  normal: <NormalIcon />,
  dark: <DarkIcon />,
  steel: <SteelIcon />,
  rock: <RockIcon />,
  psychic: <PsychicIcon />,
  ground: <GroundIcon />,
  poison: <PoisonIcon />,
  flying: <FlyingIcon />,
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
      const elementTitle = pokemon.titleInEnglish.title.toLowerCase() as ElementType
      setBgColor(elementColors[elementTitle] || "black");
    } else {
      setTransformTitle(title)
    }
  }, [title])

  return (
    <div className={`flex items-center gap-2 bg-${bgColor} rounded-3xl justify-center p-2`}>
      <p>{transformTitle}</p>
      <div className=' bg-white rounded-full p-1'>
        {elementIcons[bgColor as ElementType]}
      </div>
    </div>
  )
}