export const InlineStyle = () => {
  const containerStyle = {
    border: 'solid 1px tomato',
    borderRadius: '20px',
    padding: '10px',
    margin: '10px',
    display: 'flex',
    gap: '10px'
  }
  const titleStyle = {
    margin: '0'
  }
  const buttonStyle = {
    background: 'tomato',
    color: '#fff'
  }

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>InlineStyle</p>
      <button style={buttonStyle}>ボタン</button>
    </div>
  )
}
