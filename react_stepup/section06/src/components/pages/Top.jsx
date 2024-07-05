import styled from 'styled-components'
import { SecondaryButton } from '../atoms/button/SecondaryButton'
import { useNavigate } from 'react-router-dom'

export const Top = () => {
  const navigate = useNavigate()

  const onClickAdmin = () => navigate('/users', { state: { isAdmin: true } })
  const onClickGeneral = () => navigate('/users', { state: { isAdmin: false } })
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
