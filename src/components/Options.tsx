interface OptionProps {
  onSelectChange: (value: string) => void
}

export function Options({ onSelectChange }: OptionProps) {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectChange(event.target.value)
  }

  return (
    <select
      id="titulo"
      className="bg-black px-4 py-2.5 rounded-3xl text-white"
      onChange={handleSelectChange}
    >
      <option value="growing">crescente</option>
      <option value="descending">decrescente</option>
    </select>
  )
}