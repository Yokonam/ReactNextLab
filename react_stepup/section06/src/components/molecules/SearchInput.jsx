import styled from 'styled-components'
import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { SecondaryButton } from '../atoms/button/SecondaryButton'
import { Input } from '../atoms/input/Input'

export const SearchInput = (props) => {
  return (
    <SContainer>
      <Input type="text" placeholder="検索条件" />
      <SButtonWrapper>
        <SecondaryButton>検索</SecondaryButton>
      </SButtonWrapper>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  align-items: center;
`

const SButtonWrapper = styled.div`
  padding-left: 8px;
`
