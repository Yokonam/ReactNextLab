/** @jsxImportSource @emotion/react */

import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'
export const Emotion = () => {
  const containerStyle = css`
      border: solid 1px tomato;
        border-radius: 20px;
        padding: 10px;
        margin: 10px;
        display: flex;
        gap: 10px;
        }
    `
  const titleStyle = css({
    margin: '0'
  })
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>Emotion</p>
      <StyledButton>ボタン</StyledButton>
    </div>
  )
}

const StyledButton = styled.button`
  background: tomato;
  color: #fff;
`
