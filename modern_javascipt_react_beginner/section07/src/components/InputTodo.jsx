const style = {
  border: 'solid 1px tomato',
  padding: '20px',
  borderRadius: '10px',
  display: 'flex',
  gap: '10px'
}

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props
  return (
    <div style={style}>
      <input
        disabled={disabled}
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  )
}
