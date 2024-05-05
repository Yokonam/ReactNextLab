'use client'
import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState<number[]>([])

  function countPlus() {
    if (count < 10) {
      setCount(count + 1)
      setHistory([...history, count + 1])
    }
  }

  function countMinus() {
    if (0 < count) {
      setCount(count - 1)
      setHistory([...history, count - 1])
    }
  }

  function handleClickReset() {
    setCount(0)
    setHistory([])
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={countPlus}>カウンターを増やす</button>
      <button onClick={countMinus}>カウンターを減らす</button>
      <button onClick={handleClickReset}>カウンターをリセット</button>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}
