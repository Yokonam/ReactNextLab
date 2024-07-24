export const App = () => {
  const onClickButton = () => alert('こんにちは')
  return (
    <div>
      <h1>こんにちは</h1>
      <p>お元気?w</p>
      <button className="button" onClick={onClickButton}>
        ボタン
      </button>
    </div>
  )
}
