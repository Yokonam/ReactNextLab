import styled from 'styled-components'
import { SearchInput } from '../molecules/SearchInput'
import { UserCard } from '../organisms/user/UserCard'

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
  return (
    <SContainer>
      <h2>ユーザー</h2>
      <SearchInput />
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
