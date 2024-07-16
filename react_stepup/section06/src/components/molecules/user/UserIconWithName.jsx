import React from 'react'
import { useRecoilValue } from 'recoil'
import { userState } from '../../../store/userState.js'
import styled from 'styled-components'
export const UserIconWithName = (props) => {
  const { image, name } = props
  // const { userInfo } = useContext(UserContext)
  const userInfo = useRecoilValue(userState)
  const isAdmin = userInfo ? userInfo.isAdmin : false

  return (
    <SContainer>
      <SImg src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`
const SImg = styled.img`
  border-radius: 50%;
`
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`

const SEdit = styled.div`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`
