import { Link } from 'react-router-dom'
interface CustomLinkProps {
  pathname: string
  state: number[]
}

export const Page1 = () => {
  const arr = [...Array(100).keys()]
  return (
    <>
      <h1>Page1</h1>
      <Link to={{ pathname: '/page1/detailA', state: arr } as CustomLinkProps}>
        DetailA
      </Link>
      <br />
      <Link to="/page1/DetailB">DetailB</Link>
    </>
  )
}
