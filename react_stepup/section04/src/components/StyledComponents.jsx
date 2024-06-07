import styled from 'styled-components'

export const StyledComponents = () => {
  return (
    <Container>
      <Title>StyledComponents</Title>
      <Button>ボタン</Button>
    </Container>
  )
}

const Container = styled.div`
  border: solid 1px tomato;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
  display: flex;
  gap: 10px;
`

const Button = styled.button`
  background: tomato;
  color: #fff;

  &:hover {
    background: #ff6347;
  }
`
const Title = styled.p`
  margin: 0;
`
