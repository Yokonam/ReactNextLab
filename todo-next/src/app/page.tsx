'use client'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function Home() {
  const [inputText, setInputText] = useState('')
  const [list, setList] = useState<string[]>([])

  const onchange = (value: string) => {
    setInputText(value)
  }

  const onclickAdd = () => {
    setList([...list, inputText])
    setInputText('')
  }

  const onClickDelete = (index: number) => {
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }

  return (
    <>
      <div>
        <input
          type="text"
          id="input"
          onChange={(e) => onchange(e.target.value)}
          value={inputText}
        />
        <button onClick={() => onclickAdd()} disabled={inputText === ''}>
          追加
        </button>
      </div>
      <div id="list">
        <ul>
          {list.map((item, index) => {
            return (
              <li key={uuidv4()}>
                <p>{item}</p>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
