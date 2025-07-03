import styled from 'styled-components'

export default function TasksFooter({
  activeCount,
  completedCount,
  clearCompleted,
}) {
  return (
    <Wrapper>
      <FooterStats>
        <span>{activeCount} активные задачи</span>
        <FooterSeparator>•</FooterSeparator>
        <span>{completedCount} выполнено</span>
      </FooterStats>
      {completedCount > 0 && (
        <ClearButton onClick={clearCompleted}>Очистить выполненные</ClearButton>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.size.sm};

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.gray};

  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.lightGray};
`

const FooterStats = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 2vw, 1rem);
`

const FooterSeparator = styled.span`
  color: ${({ theme }) => theme.colors.lightGray};
`

const ClearButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.lightGray};
  cursor: pointer;
  font-size: 0.875rem;

  transition: color 0.2s ease-in-out;

  &:hover {
    color: #e94a4a;
  }
`
