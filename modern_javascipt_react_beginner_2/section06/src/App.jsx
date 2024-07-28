import { useState } from 'react'
import { ColorfulMessage } from './components/ColorfulMessage'

export const App = () => {
  const [num, setNum] = useState(0)
  const onClickButton = () => {
    setNum(num + 1)
  }
  return (
    <div>
      <h1>こんにちは</h1>
      <p>お元気?w</p>
      <ColorfulMessage color="blue">お元気?</ColorfulMessage>
      <ColorfulMessage color="red">お元気?</ColorfulMessage>

      <button className="button" onClick={onClickButton}>
        ボタン
      </button>
      <p>{num}</p>
    </div>
  )
}
