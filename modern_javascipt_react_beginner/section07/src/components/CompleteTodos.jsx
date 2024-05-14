const style = {
  border: 'solid 1px tomato',
  padding: '20px',
  borderRadius: '10px',
  marginTop: '20px'
}

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props
  return (
    <div style={style}>
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
