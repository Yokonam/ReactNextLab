import { useParams } from 'react-router-dom'

export const UrlParameter = () => {
  const { id } = useParams()

  return (
    <div>
      <h2>URL Parameter</h2>
      <p>Parameter value: {id}</p>
    </div>
  )
}
