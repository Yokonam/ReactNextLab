import { useLocation, useNavigate } from 'react-router-dom'
export const Page1DetailA = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const onclickBack = () => {
    navigate('/page1/detailA')
  }
  console.log(location.state)

  return (
    <>
      <h1>Page1DetailA</h1>
      <button onClick={onclickBack}>戻る</button>
    </>
  )
}
