import { Header } from '../atoms/layout/Header'

export const HeaderOnly = (props) => {
  const { children } = props

  return (
    <>
      <Header>header</Header>
      {children}
    </>
  )
}
