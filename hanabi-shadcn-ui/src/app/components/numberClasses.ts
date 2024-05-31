// numberClasses.ts
type Number = 1 | 2 | 3 | 4 | 5

const numberClasses: { [key in Number]: { default: string;  hover: string} } = {
  1: { default: '!bg-pink-50', hover: 'hover:!bg-pink-50' },
  2: { default: '!bg-pink-100' , hover: 'hover:!bg-pink-50'},
  3: { default: '!bg-pink-200' , hover: 'hover:!bg-pink-50'},
  4: { default: '!bg-pink-300' , hover: 'hover:!bg-pink-50'},
  5: { default: '!bg-pink-400', hover: 'hover:!bg-pink-50' }
}

export type { Number }
export { numberClasses }
