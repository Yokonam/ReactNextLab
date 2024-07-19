import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { SecondaryButton } from '../atoms/button/SecondaryButton'
import { userState } from '../../store/userState'

import { useSetRecoilState } from 'recoil'
export const Top = () => {
  const navigate = useNavigate()

  // const setUserInfo = useSetRecoilState(userState)
  const setUserInfo = useSetRecoilState(userState)

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true })
    navigate('/users')
  }
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false })
    navigate('/users')
  }
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
