const style = {
  border: 'solid 1px tomato',
  padding: '20px',
  borderRadius: '10px',
  marginTop: '20px'
}

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props
  return (
    <div style={style}>
      <p className="title">未完了</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <span>{todo}</span>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
