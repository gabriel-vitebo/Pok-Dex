import { IconHearth } from "./IconHearth";
import { Tag } from "./Tag";

interface CardProps {
  id: number,
  name: string,
  image: string
  types: string[]
}

export function Card({
  name, image, id, types
}: CardProps) {
  return (
    <div className="rounded-2xl bg-card flex flex-row justify-between">
      <div className="pl-4 py-3 flex flex-col items-start">
        <h3 className="text-h3 font-semibold">{`Nº${id}`}</h3>
        <div className="flex gap-0.5 items-center">
          <h2 className="font-semibold text-2xl">{name}</h2>
          <IconHearth />
        </div>
        <div className="flex gap-2">
          {
            types.map((type) => (
              <Tag title={type} typeColor={type} key={name} />
            ))
          }
        </div>
      </div>
      <div className={`bg-${types[0]} flex items-center rounded-2xl`}>
        <img src={image} alt="" className="w-image h-image px-4 object-fill" />
      </div>
    </div>
  )
}