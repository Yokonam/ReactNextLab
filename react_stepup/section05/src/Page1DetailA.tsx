import { useLocation } from 'react-router-dom'
export const Page1DetailA = () => {
  const location = useLocation()
  console.log(location.state)

  return (
    <>
      <h1>Page1DetailA</h1>
    </>
  )
}
