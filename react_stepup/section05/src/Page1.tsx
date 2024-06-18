import { Link, useNavigate, Outlet } from 'react-router-dom'
interface CustomLinkProps {
  pathname: string
  state: number[]
}

export const Page1 = () => {
  const arr = [...Array(100).keys()]
  const navigate = useNavigate()

  const onclickDetailA = () => {
    navigate('/page1/detailA')
  }
  return (
    <>
      <h1>Page1</h1>
      <Link to={{ pathname: '/page1/detailA' }} state={arr}>
        DetailA
      </Link>
      <br />
      <Link to="/page1/DetailB">DetailB</Link>
      <br />
      <button onClick={onclickDetailA}>DetailA</button>
      <Outlet />
    </>
  )
}
