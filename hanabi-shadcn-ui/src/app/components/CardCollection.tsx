import { CardCollectionProps } from './types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
function CardCollection({ cards, handleChange }: CardCollectionProps) {
  return (
    <Card>
      {Object.keys(cards).map((color) => (
        <div key={color}>
          <CardHeader>
            <CardTitle>{color}</CardTitle>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </div>
      ))}
    </Card>
  )
}
export default CardCollection
