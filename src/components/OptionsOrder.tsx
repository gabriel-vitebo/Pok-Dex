interface OptionProps {
  onSelectChange: (value: string) => void
  id: string
}

export function OptionsOrder({ onSelectChange, id }: OptionProps) {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectChange(event.target.value)
  }

  return (
    <select
      id={id}
      className="bg-black px-4 py-2.5 rounded-3xl text-white"
      onChange={handleSelectChange}
    >
      <option value="growing">crescente</option>
      <option value="descending">decrescente</option>
    </select>
  )
}