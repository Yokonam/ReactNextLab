'use client'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export type historyProps = {
  id: number
  value: string | number
}

export default function Home() {
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState<historyProps[]>([])
  const [maxCount, setMaxCount] = useState(5)
  const [minCount, setMinCount] = useState(0)
  const [range, setRange] = useState(1)

  function countPlus() {
    const newCount = count + range
    setCount(newCount)
    setHistory([...history, { id: uuidv4(), value: newCount }])
  }

  function countMinus() {
    const newCount = count - range
    setCount(newCount)
    setHistory([...history, { id: uuidv4(), value: newCount }])
  }

  function handleClickReset() {
    setCount(0)
    setHistory([])
    setMaxCount(5)
    setMinCount(0)
    setRange(1)
  }

  return (
    <>
      <p>{count}</p>
      <button disabled={maxCount - 1 < count} onClick={countPlus}>
        カウンターを増やす
      </button>
      <button disabled={count - 1 < minCount} onClick={countMinus}>
        カウンターを減らす
      </button>
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
        {history.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </>
  )
}
