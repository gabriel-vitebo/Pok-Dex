import { useState } from 'react';
import { pokemonsElement } from '../utils/pokemonsElement'

interface OptionTypesProps {
  onSelectChange: (value: string) => void
  id: string
}

export function OptionsTypes({ onSelectChange, id }: OptionTypesProps) {
  const [selectedValue, setSelectedValue] = useState('all');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectChange(event.target.value)
    setSelectedValue(event.target.value)
  }

  return (
    <select
      id={id}
      className={`bg-${selectedValue} px-4 py-2.5 rounded-3xl text-white`}
      onChange={handleSelectChange}
    >
      <option value="all">Todos os Tipos</option>
      {
        pokemonsElement.map((item, i) => (
          <option key={`${item.titleInEnglish.title}-${i}`} value={item.titleInEnglish.title.toLowerCase()}>{item.titleInPortuguese.title}</option>
        ))
      }
    </select>
  )
}