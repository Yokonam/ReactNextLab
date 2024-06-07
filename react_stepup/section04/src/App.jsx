import { CssModules } from './components/CssModules'
import { InlineStyle } from './components/InlineStyle'
import { StyledJsx } from './components/StyledJsx'
import { StyledComponents } from './components/StyledComponents'
import { Emotion } from './components/Emotion'

export const App = () => {
  return (
    <>
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </>
  )
}
