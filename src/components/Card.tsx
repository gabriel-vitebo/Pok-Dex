import { IconAdd } from "./IconAdd";

export function Card() {
  return (
    <div className="rounded-2xl bg-card flex flex-row justify-between">
      <div className="pl-4 pt-3">
        <h3 className="text-h3 font-semibold">Nº001</h3>
        <div className="flex gap-0.5 items-center">
          <h2 className="font-semibold text-2xl">Bulbasaur</h2>
          <IconAdd />
        </div>
      </div>
      <div className="bg-green flex items-center rounded-2xl">
        <img src="https://github.com/gabriel-vitebo.png" alt="" className="w-image h-image px-4 object-fill" />
      </div>
    </div>
  )
}