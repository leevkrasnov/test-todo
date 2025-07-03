import styled from 'styled-components'
import { ClipboardCheck } from 'lucide-react'

export default function TasksHeader() {
  return (
    <Wrapper>
      <HeaderIcon />
      <HeaderTitle>Список задач</HeaderTitle>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  column-gap: clamp(0.5rem, 1.6vw, 2.5rem);
`

const HeaderIcon = styled(ClipboardCheck)`
  width: ${({ theme }) => theme.size.basic};
  height: ${({ theme }) => theme.size.basic};
  color: ${({ theme }) => theme.colors.blue};
`

const HeaderTitle = styled.h1`
  font-size: ${({ theme }) => theme.size.basic};
  color: ${({ theme }) => theme.colors.text};
`
