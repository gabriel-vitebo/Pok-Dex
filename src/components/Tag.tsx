import grass from '../assets/elements/grass.svg'

interface TagProps {
  title: string
}

export function Tag({ title }: TagProps) {
  return (
    <div className='flex items-center gap-2 bg-green rounded-3xl justify-center p-2'>
      <p>{title}</p>
      <div className=' bg-white rounded-full p-1'>
        <img src={grass} alt="" className='w-6 h-6 object-fill' />
      </div>
    </div>
  )
}