import { CardCollectionProps } from './types'
interface CardItemProps {
  id: string
  text: string
  handleChange: () => void
  checked: boolean
}
function CardItem({ id, text, handleChange, checked }: CardItemProps) {
  return (
    <div key={id}>
      <input
        type="checkbox"
        id={`${id}-${text}`}
        name={`${text}`}
        onChange={() => handleChange()}
        checked={checked}
      />
      <label htmlFor={`${id}-${text}`}>{text}</label>
    </div>
  )
}
export default CardItem
