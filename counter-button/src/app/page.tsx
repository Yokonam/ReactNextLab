'use client'
import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState<number[]>([])
  const [maxCount, setMaxCount] = useState(10)
  const [minCount, setMinCount] = useState(0)
  const [range, setRange] = useState(1)

  function countPlus() {
    if (count < maxCount) {
      setCount(count + range)
      setHistory([...history, count + range])
    }
  }

  function countMinus() {
    if (minCount < count) {
      setCount(count - range)
      setHistory([...history, count - range])
    }
  }

  function handleClickReset() {
    setCount(0)
    setHistory([])
    setRange(0)
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={countPlus}>カウンターを増やす</button>
      <button onClick={countMinus}>カウンターを減らす</button>
      <button onClick={handleClickReset}>カウンターをリセット</button>
      <p>最大値</p>
      <input
        type="number"
        value={maxCount}
        onChange={(e) => setMaxCount(Number(e.target.value))}
      />
      <p>最小値</p>
      <input
        type="number"
        value={minCount}
        onChange={(e) => setMinCount(Number(e.target.value))}
      />
      <p>増加値</p>
      <input
        type="number"
        value={range}
        onChange={(e) => setRange(Number(e.target.value))}
      />
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}
