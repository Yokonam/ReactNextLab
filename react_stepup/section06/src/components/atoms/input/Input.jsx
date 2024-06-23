import styled from 'styled-components'

export const Input = (props) => {
  const { placeholder = '' } = props
  return <SInput type="text" placeholder={placeholder} />
}

const SInput = styled.input`
  padding: 8px 24px;
  border: 2px solid #11999e;
  border-radius: calc(infinity * 1px);
`
