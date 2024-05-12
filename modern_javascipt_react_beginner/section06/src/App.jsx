import { useEffect, useState } from 'react'
import { ColorfulMessage } from './components/ColorfulMessage'

export const App = () => {
  console.log('--App--')
  const [num, setNum] = useState(0)
  const [isShowLike, setIsShowLike] = useState(true)
  const onClickCountUp = () => {
    setNum((prev) => prev + 1)
  }

  const onClickSwitchShowLike = () => {
    setIsShowLike(!isShowLike)
  }

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        isShowLike || setIsShowLike(true)
      } else {
        isShowLike && setIsShowLike(false)
      }
    }
  }, [num])

  return (
    <>
      <h1 style={{ color: 'olive' }}>こん</h1>
      <ColorfulMessage color="blue">元気</ColorfulMessage>
      <ColorfulMessage color="green">元気やで</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickSwitchShowLike}>on/off</button>
      {isShowLike && <p>いいねぇ</p>}
    </>
  )
}
