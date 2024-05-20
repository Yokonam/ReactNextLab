import { CardCollectionProps } from './types'

function CardCollection({ cards, handleChange }: CardCollectionProps) {
  return (
    <div>
      {Object.keys(cards).map((color) => (
        <div key={color}>
          <h2>{color}</h2>
          {cards[color].map((card, index) => (
            <div key={index}>
              <input
                type="checkbox"
                checked={card.exists}
                id={`${color}-${index}`}
                name={`${color}-${index}`}
                onChange={() => handleChange(color, index)}
              />
              <label htmlFor={`${color}-${index}`}>
                Value: {card.value}, Exists: {card.exists ? 'Yes' : 'No'}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
export default CardCollection
