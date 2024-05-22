import { CardCollectionProps } from './types'

function CardColor({ id, item }: { id: string; item: string }) {
  return (
    <div key={id}>
      <input type="checkbox" id={id} name={item} />
      <label htmlFor={id}>{item}</label>
    </div>
  )
}
export default CardColor
