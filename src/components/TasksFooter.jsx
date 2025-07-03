import styled from 'styled-components'

export default function TasksFooter({
  activeCount,
  completedCount,
  clearCompleted,
}) {
  return (
    <Wrapper>
      <StatsContainer>
        {activeCount} <TextInfo>активные задачи</TextInfo>
        <FooterSeparator>•</FooterSeparator>
        {completedCount} <TextInfo>выполнено</TextInfo>
      </StatsContainer>
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

const FooterSeparator = styled.span`
  margin: 0 1rem;
  color: ${({ theme }) => theme.colors.lightGray};
`

const StatsContainer = styled.span`
  display: flex;
  align-items: center;
`

const TextInfo = styled.span`
  display: block;
  margin-left: 0.2rem;

  @media (max-width: 600px) {
    display: none;
  }
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
