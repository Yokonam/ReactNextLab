import styled from 'styled-components'
import { SecondaryButton } from '../atoms/button/SecondaryButton'
import { useNavigate } from 'react-router-dom'
import React, { useContext } from 'react'
import { UserContext } from '../../providers/UserProviders'

export const Top = () => {
  const navigate = useNavigate()
  const { setUserInfo } = useContext(UserContext)

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
