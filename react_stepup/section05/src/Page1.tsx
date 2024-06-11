import { Link } from 'react-router-dom'

export const Page1 = () => {
  return (
    <>
      <h1>Page1</h1>
      <Link to="/page1/DetailA">DetailA</Link>
      <br />
      <Link to="/page1/DetailB">DetailB</Link>
    </>
  )
}
