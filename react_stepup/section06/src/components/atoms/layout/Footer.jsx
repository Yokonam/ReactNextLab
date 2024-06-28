import styled from 'styled-components'
export const Footer = (props) => {
  const { children } = props

  return <SFooter>&copy; 20xx {children}</SFooter>
}

const SFooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`
