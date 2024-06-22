import styled from 'styled-components'

export const Input = (props) => {
  const { placeholder = '' } = props
  return <SInput type="text" placeholder={placeholder} />
}

const SInput = styled.input`
  background-color: #11999e;
`
