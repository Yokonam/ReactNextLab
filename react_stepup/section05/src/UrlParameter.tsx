import { useParams, useLocation } from 'react-router-dom'

export const UrlParameter = () => {
  const { id } = useParams()
  const { search } = useLocation()
  const query = new URLSearchParams(search)
  return (
    <div>
      <h2>URL Parameter</h2>
      <p>Parameter value: {id}</p>
      <p>クエリParameter value: {query.get('name')}</p>
    </div>
  )
}
