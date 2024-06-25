import styled from 'styled-components'
export const UserCard = (props) => {
  const { user } = props
  return (
    <div>
      <img src={user.image} alt={user.name} />
      <p>{user.name}</p>
      <SDl>
        <dl>
          <dt>メール</dt>
          <dd>1</dd>
          <dt>TEL</dt>
          <dd>1</dd>
          <dt>会社名</dt>
        </dl>
      </SDl>
    </div>
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
