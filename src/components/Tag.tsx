interface TagProps {
  title: string
  typeColor: string
}

export function Tag({ title, typeColor }: TagProps) {
  return (
    <div className={`flex items-center gap-2 bg-${typeColor} rounded-3xl justify-center p-2`}>
      <p>{title}</p>
      <div className=' bg-white rounded-full p-1'>
        <img src={`src/assets/elements/${typeColor}.svg`} alt={`${title} icon`} className='w-6 h-6 object-fill' />
      </div>
    </div>
  )
}