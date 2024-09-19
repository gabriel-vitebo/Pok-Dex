import { Card } from "../components/Card";
import { FilterInput } from "../components/FilterInput";
import { Options } from "../components/Options";

export default function Home() {
  return (
    <div className="flex items-center flex-col py-5">
      <FilterInput />
      <div className="mt-5 flex gap-0.5">
        <Options />
      </div>
      <main className="w-90p">
        <Card />
      </main>

    </div>
  )
}