import styled from 'styled-components'
import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { SecondaryButton } from '../atoms/button/SecondaryButton'
import { Input } from '../atoms/input/Input'

export const SearchInput = (props) => {
  return (
    <div>
      <Input type="text" placeholder="検索条件" />
      <SecondaryButton>検索</SecondaryButton>
    </div>
  )
}
