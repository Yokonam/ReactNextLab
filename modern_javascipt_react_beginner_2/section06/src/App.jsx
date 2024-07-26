import { ColorfulMessage } from './components/ColorfulMessage'

export const App = () => {
  const onClickButton = () => alert('こんにちは')
  return (
    <div>
      <h1>こんにちは</h1>
      <p>お元気?w</p>
      <ColorfulMessage color="blue">お元気?</ColorfulMessage>
      <ColorfulMessage color="red">お元気?</ColorfulMessage>

      <button className="button" onClick={onClickButton}>
        ボタン
      </button>
    </div>
  )
}
