'use client'
import { useState } from 'react'

export default function Home() {
  const [inputText, setInputText] = useState('')
  const [list, setList] = useState<string[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }

  const handleAdd = () => {
    setList([...list, inputText])
    setInputText('')
  }

  const handleDelete = (index: number) => {
    setList(list.filter((_, i) => i !== index))
  }

  return (
    <>
      <div>
        <input
          type="text"
          id="input"
          onChange={handleChange}
          value={inputText}
        />
        <button onClick={handleAdd} disabled={inputText === ''}>
          追加
        </button>
      </div>
      <div id="list">
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index}>
                <p>{item}</p>
                <button onClick={() => handleDelete(index)}>削除</button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
