import { Page1 } from '../Page1'
import { Page1DetailA } from '../Page1DetailA'
import { Page1DetailB } from '../Page1DetailB'

export const Page1Routes = [
  {
    path: '',
    element: <Page1 />
  },
  {
    path: 'detailA',
    element: <Page1DetailA />
  },

  {
    path: 'detailB',
    element: <Page1DetailB />
  }
]
