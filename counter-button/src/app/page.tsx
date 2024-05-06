'use client'
import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState<number[]>([])
  const [maxCount, setMaxCount] = useState(10)
  const [minCount, setMinCount] = useState(0)

  function countPlus() {
    if (count < maxCount) {
      setCount(count + 1)
      setHistory([...history, count + 1])
    }
  }

  function countMinus() {
    if (minCount < count) {
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
      <input
        type="number"
        value={maxCount}
        onChange={(e) => setMaxCount(Number(e.target.value))}
      />
      <input
        type="number"
        value={minCount}
        onChange={(e) => setMinCount(Number(e.target.value))}
      />
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}
