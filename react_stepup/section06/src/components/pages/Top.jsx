import styled from 'styled-components'
import { SecondaryButton } from '../atoms/button/SecondaryButton'
export const Top = () => {
  const onClickAdmin = () => alert('管理者です')
  const onClickGeneral = () => alert('一般です')
  return (
    <SContainer>
      <h2>top</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者</SecondaryButton>
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般</SecondaryButton>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`
