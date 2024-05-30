import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { ToggleGroup } from '@/components/ui/toggle-group'
import CardCheckbox from './CardCheckbox'
import {
  CardCollectionProp,
  CardItemProp,
  ColorOptionProp,
  NumberOptionProp
} from './types'

function CardItem({
  id,
  index,
  colors,
  numbers,
  handleChangeCard,
  handleDeleteClick
}: CardItemProp) {
  return (
    <Card className="grow">
      <CardHeader>
        <CardTitle>{index}</CardTitle>
      </CardHeader>
      <CardContent>
        <ToggleGroup type="single" variant="outline">
          {Object.keys(colors).map((color) => {
            return (
              <CardCheckbox
                key={`${id}-${color}`}
                id={id}
                text={color}
                handleChange={() => handleChangeCard(id, color, 'color')}
                checked={colors[color as keyof ColorOptionProp]}
                type="color"
              />
            )
          })}
        </ToggleGroup>
        <ToggleGroup type="single" variant="outline">
          {Object.keys(numbers).map((number) => {
            return (
              <CardCheckbox
                key={`${id}-${number}`}
                id={id}
                text={number}
                handleChange={() => handleChangeCard(id, number, 'number')}
                checked={numbers[number as keyof NumberOptionProp]}
                type="number"
              />
            )
          })}
        </ToggleGroup>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={() => handleDeleteClick(id)}>
          削除
        </Button>
      </CardFooter>
    </Card>
  )
}
export default CardItem
