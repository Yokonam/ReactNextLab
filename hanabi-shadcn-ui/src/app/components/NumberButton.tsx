import { Button } from '@/components/ui/button'
import { Number, numberClasses } from './numberClasses'

function NumberButton({
  number,
  handleOnClick
}: {
  number: Number
  handleOnClick: () => void
}) {
  return (
    <Button
      variant="outline"
      key={`${number}`}
      onClick={() => handleOnClick()}
      className={`${numberClasses[number].default}`}
    >
      {number}
    </Button>
  )
}
export default NumberButton
