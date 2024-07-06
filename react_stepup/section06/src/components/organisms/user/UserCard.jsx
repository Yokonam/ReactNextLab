import styled from 'styled-components'
import { Card } from '../../atoms/card/Card'
import { UserIconWithName } from '../../molecules/user/UserIconWithName'
export const UserCard = (props) => {
  const { user, isAdmin } = props
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} isAdmin={isAdmin} />
      <SDl>
        <dl>
          <dt>メール</dt>
          <dd>{user.email}</dd>
          <dt>TEL</dt>
          <dd>{user.phone}</dd>
          <dt>会社名</dt>
          <dd>{user.company.name}</dd>
          <dt>ウェブサイト</dt>
          <dd>{user.company.website}</dd>
        </dl>
      </SDl>
    </Card>
  )
}

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0;
  dl {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow: hidden;
  }
`
