import { Outlet, Link } from 'react-router-dom'

export const Page2 = () => {
  return (
    <>
      <h1>Page2</h1>
      <Link to="000?name=tomodachi">URLパラメーターページ</Link>
      <Outlet />
    </>
  )
}
