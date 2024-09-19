import { ChangeEventHandler } from "react"

interface FilterInputProps {
  search: (value: string | null) => void;
}

export function FilterInput({
  search
}: FilterInputProps) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    search(e.target.value ?? null)
  }

  return (
    <div className="w-full rounded-3xl bg-white flex items-center">
      <input
        type="text"
        className="flex-1 p-1.5 bg-white placeholder:text-black placeholder:pl-1"
        placeholder="Procurar Pókemon..."
        onChange={handleChange}
      />
    </div>
  )
}