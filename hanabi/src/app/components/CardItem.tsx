import { CardCollectionProps } from './types'

function CardItem({ id, item }: { id: string; item: string | number }) {
  return (
    <div key={id}>
      <input type="checkbox" id={id} name={`${item}`} />
      <label htmlFor={id}>{`${item}`}</label>
    </div>
  )
}
export default CardItem