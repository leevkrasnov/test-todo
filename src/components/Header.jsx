import styled from 'styled-components'
import { ClipboardCheck } from 'lucide-react'

export default function Header() {
  return (
    <Wrapper>
      <Icon />
      <Title>Список задач</Title>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  column-gap: clamp(0.5rem, 1.6vw, 2.5rem);
`

const Icon = styled(ClipboardCheck)`
  width: ${({ theme }) => theme.size.basic};
  height: ${({ theme }) => theme.size.basic};
  color: ${({ theme }) => theme.colors.blue};
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.size.basic};
  color: ${({ theme }) => theme.colors.text};
`
