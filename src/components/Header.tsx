import { IconHearth } from "./IconHearth";
import { IconArrowLeft } from "./IconArrowLeft";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface HeaderProps {
  image: string
  background: string
}

const elementColors: { [key: string]: string } = {
  water: "bg-water",
  dragon: "bg-dragon",
  electric: "bg-electric",
  fairy: "bg-fairy",
  ghost: "bg-ghost",
  fire: "bg-fire",
  ice: "bg-ice",
  grass: "bg-grass",
  bug: "bg-bug",
  fighting: "bg-fighting",
  normal: "bg-normal",
  dark: "bg-dark",
  steel: "bg-steel",
  rock: "bg-rock",
  psychic: "bg-psychic",
  ground: "bg-ground",
  poison: "bg-poison",
  flying: "bg-flying",
};

export function Header({ image, background }: HeaderProps) {
  const [bgColor, setBgColor] = useState<string>("bg-black");

  useEffect(() => {
    setBgColor(elementColors[background] || "bg-black");
  }, [background]);

  console.log(bgColor)

  return (
    <header className="relative">
      <div className="absolute inset-0 flex justify-between m-4 z-10 items-start">
        <button className="top-0 left-0">
          <IconArrowLeft />
        </button>
        <button className="top-0 right-0">
          <IconHearth />
        </button>
      </div>
      <div className="w-full relative">
        <div className={clsx("rounded-b-full flex justify-center", bgColor)}>
          <img src={image} alt={`Imagem do pokemon`} className="w-imageDetails h-imageDetails px-4 object-fill relative top-10" />
        </div>
      </div>
    </header>
  )
}