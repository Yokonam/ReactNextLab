import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Header = (props) => {
  const { children } = props

  return (
    <SHeader>
      <SHeaderTitle>{children}</SHeaderTitle>
      <SLink to="/">Home</SLink>
      <SLink to="users/">Users</SLink>
    </SHeader>
  )
}

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`

const SHeaderTitle = styled.h1`
  font-size: 24px;
`

const SLink = styled(Link)`
  margin-right: 8px;
`
