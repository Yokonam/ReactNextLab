import { CardCollectionProps } from './types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
function CardCollection({ cards, handleChange }: CardCollectionProps) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {Object.keys(cards).map((color) => (
        <Card key={color}>
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
        </Card>
      ))}
    </div>
  )
}
export default CardCollection
