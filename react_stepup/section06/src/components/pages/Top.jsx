import styled from 'styled-components'
import { SecondaryButton } from '../atoms/button/SecondaryButton'
export const Top = () => {
  return (
    <SContainer>
      <h2>top</h2>
      <SecondaryButton>管理者</SecondaryButton>
      <br />
      <SecondaryButton>一般</SecondaryButton>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`
