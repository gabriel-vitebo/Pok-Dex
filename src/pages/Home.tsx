import { FilterInput } from "../components/FilterInput";
import { Options } from "../components/Options";

export default function Home() {
  return (
    <main className="flex items-center flex-col py-5">
      <FilterInput />
      <div className="mt-5">
        <Options />
      </div>

    </main>
  )
}