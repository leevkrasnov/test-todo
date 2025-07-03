import styled from 'styled-components'

export default function FilterSection({ setFilter, currentFilter }) {
  return (
    <Wrapper>
      <FilterTabs>
        <FilterButton
          $active={currentFilter === 'all'}
          onClick={() => setFilter('all')}
        >
          Все
        </FilterButton>
        <FilterButton
          $active={currentFilter === 'active'}
          onClick={() => setFilter('active')}
        >
          Активные
        </FilterButton>
        <FilterButton
          $active={currentFilter === 'completed'}
          onClick={() => setFilter('completed')}
        >
          Выполненные
        </FilterButton>
      </FilterTabs>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.size.sm};

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  background: #fff;
`

const FilterTabs = styled.div`
  display: flex;
  gap: 0.25rem;

  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0.5rem;
  padding: 0.25rem;
`

const FilterButton = styled.button`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: clamp(0.5rem, 2vw, 0.75rem) clamp(0.75rem, 3vw, 1rem);

  font-size: 0.875rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 700;

  ${(props) =>
    props.$active
      ? `
    background-color: white;
    color: #1560BD;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  `
      : `
    background-color: transparent;
    color: #647482;
    
    &:hover {
      color: #1a2b35;
      background-color: #e6e9ec;
    }
  `}
`
