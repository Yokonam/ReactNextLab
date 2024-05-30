import { ToggleGroupItem } from '@/components/ui/toggle-group'
import { Color, colorClasses } from './colorClasses'
import { Number, numberClasses } from './numberClasses'

interface CardCheckboxProps {
  id: string
  text: Color | Number
  handleChange: () => void
  checked: boolean
  type: 'color' | 'number'
}

function CardCheckbox({
  id,
  text,
  handleChange,
  checked,
  type
}: CardCheckboxProps) {
  const classes =
    type === 'color'
      ? colorClasses[text as Color]
      : numberClasses[text as Number]
  console.log(classes)
  return (
    <ToggleGroupItem
      id={`${id}-${text}`}
      value={`${text}`}
      onClick={handleChange}
      data-state={checked ? 'on' : 'off'}
      aria-pressed={checked}
      className={`${checked ? `${classes.default} ${classes.hover}` : ''}`}
    >
      {text}
    </ToggleGroupItem>
  )
}

export default CardCheckbox
