import React from 'react'
import styled from 'styled-components'
import { SecondaryButton } from '../atoms/button/SecondaryButton'
import { useRecoilState } from 'recoil'

import { SearchInput } from '../molecules/SearchInput'
import { UserCard } from '../organisms/user/UserCard'
import { userState } from '../../store/userState.js'

const users = [...Array(10).keys()].map((val) => {
  return {
    name: `わんこ${val}`,
    image: 'https://placehold.jp/150x150.png',
    email: 'https://example.com',
    phone: '000-0000-0000',
    company: {
      name: 'テスト株式会社',
      website: 'https://example.com'
    }
  }
})

export const Users = () => {
  const [userInfo, setUserInfo] = useRecoilState(userState)

  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin })
  }

  return (
    <SContainer>
      <h2>ユーザー</h2>
      <SearchInput />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.name} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
`
