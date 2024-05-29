// colorClasses.ts
type Color = 'red' | 'blue' | 'green' | 'yellow' | 'white'

const colorClasses: { [key in Color]: { default: string; hover: string } } = {
  red: { default: 'bg-red-400', hover: 'hover:bg-red-200' },
  blue: { default: 'bg-blue-400', hover: 'hover:bg-blue-200' },
  green: { default: 'bg-green-400', hover: 'hover:bg-green-200' },
  yellow: { default: 'bg-yellow-400', hover: 'hover:bg-yellow-200' },
  white: { default: 'bg-white text-black', hover: 'hover:bg-gray-200' }
}

export type { Color }
export { colorClasses }
