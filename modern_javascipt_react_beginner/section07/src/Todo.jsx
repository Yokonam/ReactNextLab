import { useState } from 'react'
import './styles.css'

export const Todo = () => {
  const [todoText, setTodoText] = useState('')
  const [incompleteTodos, setIncompleteTodos] = useState(['TODO1', 'TODO2'])
  const [completeTodos, setCompleteTodos] = useState([
    'TODO1だったもの',
    'TODO2だったもの'
  ])

  const onChangeText = (e) => setTodoText(e.target.value)
  const onClickAdd = () => {
    if (todoText === '') return
    const newTodos = [...incompleteTodos, todoText]
    setIncompleteTodos(newTodos)
    setTodoText('')
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos)
  }
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos]
    newIncompleteTodos.splice(index, 1)
    const newCompleteTodos = [...completeTodos, newIncompleteTodos]

    setIncompleteTodos(newIncompleteTodos)
    setCompleteTodos(newCompleteTodos)
  }

  return (
    <>
      <div className="input-area">
        <input
          type="text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了</p>
        <ul>
          {incompleteTodos.map((todo, index) => (
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
      <div className="complete-area">
        <p className="title">完了</p>
        <ul>
          {completeTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <span>{todo}</span>
                <button>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
