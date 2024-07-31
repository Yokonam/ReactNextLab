import { useEffect, useState } from 'react'
import { ColorfulMessage } from './components/ColorfulMessage'

export const App = () => {
  const [num, setNum] = useState(0)
  const [show, setShow] = useState(true)
  const onClickButton = () => {
    setNum(num + 1)
  }

  const onClickShow = () => {
    setShow(!show)
  }

  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      show || setShow(true)
    } else {
      show && setShow(false)
    }
  }, [num])

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
      <button onClick={onClickShow}>on or off</button>
      {show && <p>😃</p>}
    </div>
  )
}
