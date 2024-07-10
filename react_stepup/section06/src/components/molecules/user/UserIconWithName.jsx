import React, { useContext } from 'react'
import { UserContext } from '../../../providers/UserProviders'

import styled from 'styled-components'
export const UserIconWithName = (props) => {
  const { image, name } = props
  const { userInfo } = useContext(UserContext)
  const isAdmin = userInfo ? userInfo.isAdmin : false
  const context = useContext(UserContext)

  console.log(context)
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
