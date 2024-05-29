// numberClasses.ts
type Number = 1 | 2 | 3 | 4 | 5

const numberClasses: { [key in Number]: { default: string } } = {
  1: { default: 'bg-slate-50' },
  2: { default: 'bg-slate-100' },
  3: { default: 'bg-slate-200' },
  4: { default: 'bg-slate-300' },
  5: { default: 'bg-slate-400' }
}

export type { Number }
export { numberClasses }
