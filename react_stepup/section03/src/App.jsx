import { useCallback, useState } from 'react'
import { ChildArea } from './components/ChildArea'

export const App = () => {
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)
  const onChangeText = (e) => {
    setText(e.target.value)
  }

  const onClickOpen = () => {
    setOpen(!open)
  }
  const onClickClose = useCallback(() => setOpen(false), [setOpen])

  return (
    <>
      <input type="text" value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </>
  )
}
