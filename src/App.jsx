import styled from 'styled-components'
import Header from './components/Header'

export default function App() {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
