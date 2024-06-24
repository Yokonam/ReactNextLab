export const UserCard = (props) => {
  const { user } = props
  return (
    <div>
      <img src={user.image} alt={user.name} />
      <p>{user.name}</p>
      <dl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
      </dl>
    </div>
  )
}
