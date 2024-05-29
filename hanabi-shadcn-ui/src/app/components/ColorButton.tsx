import { Button } from '@/components/ui/button'
import { Color, colorClasses } from './colorClasses'

function ColorButton({
  color,
  handleOnClick
}: {
  color: Color
  handleOnClick: () => void
}) {
  return (
    <Button
      variant="outline"
      key={color}
      onClick={handleOnClick}
      className={`${colorClasses[color].default} ${colorClasses[color].hover}`}
    >
      {color}
    </Button>
  )
}
export default ColorButton
