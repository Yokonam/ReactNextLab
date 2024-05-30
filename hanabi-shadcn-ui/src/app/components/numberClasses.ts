// numberClasses.ts
type Number = 1 | 2 | 3 | 4 | 5

const numberClasses: { [key in Number]: { default: string;  hover: string} } = {
  1: { default: 'bg-slate-50', hover: 'hover:bg-slate-50' },
  2: { default: 'bg-slate-100' , hover: 'hover:bg-slate-50'},
  3: { default: 'bg-slate-50' , hover: 'hover:bg-slate-50'},
  4: { default: 'bg-slate-300' , hover: 'hover:bg-slate-50'},
  5: { default: 'bg-slate-400', hover: 'hover:bg-slate-50' }
}

export type { Number }
export { numberClasses }
