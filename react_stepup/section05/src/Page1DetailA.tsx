import { useLocation, useNavigate } from 'react-router-dom'
export const Page1DetailA = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const onclickBack = () => {
    navigate('/page1')
  }
  console.log(location.state)

  return (
    <>
      <h2>Page1DetailA</h2>
      <button onClick={onclickBack}>戻る</button>
    </>
  )
}
