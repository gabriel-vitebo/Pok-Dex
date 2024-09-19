import { IconAdd } from "./IconAdd";
import { Tag } from "./Tag";

interface CardProps {
  id: number,
  name: string,
  image: string
}

export function Card({
  name, image, id
}: CardProps) {
  return (
    <div className="rounded-2xl bg-card flex flex-row justify-between">
      <div className="pl-4 pt-3">
        <h3 className="text-h3 font-semibold">{`Nº${id}`}</h3>
        <div className="flex gap-0.5 items-center">
          <h2 className="font-semibold text-2xl">{name}</h2>
          <IconAdd />
        </div>
        <div>
          <Tag />
        </div>
      </div>
      <div className="bg-green flex items-center rounded-2xl">
        <img src={image} alt="" className="w-image h-image px-4 object-fill" />
      </div>
    </div>
  )
}