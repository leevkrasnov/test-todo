import styled from 'styled-components'
import { Trash2 } from 'lucide-react'

export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <Wrapper $completed={task.completed}>
      <TaskLabel>
        <TaskCheckbox
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          $completed={task.completed}
        />
        <TaskText $completed={task.completed}>{task.text}</TaskText>
      </TaskLabel>
      <DeleteButton
        onClick={() => deleteTask(task.id)}
        className="delete-button"
        title="Удалить задачу"
      >
        <DeleteIcon />
      </DeleteButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.size.xs};

  display: flex;
  align-items: center;

  border-bottom: 1px solid #d9e1e9;
  transition: background-color 0.15s ease;
  background-color: ${(props) => (props.$completed ? '#f7f9fb' : '#fff')};

  &:hover {
    background-color: #f7f9fb;
  }

  .delete-button {
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover .delete-button {
    opacity: 1;
  }

  &:last-child {
    border-bottom: none;
  }
`

const TaskLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex: 1;
`

const TaskCheckbox = styled.input`
  width: ${({ theme }) => theme.size.xs};
  height: ${({ theme }) => theme.size.xs};
  margin-right: 0.75rem;
  cursor: pointer;
`

const TaskText = styled.span`
  font-size: ${({ theme }) => theme.size.xs};
  user-select: none;
  transition: all 0.2s ease;

  ${(props) =>
    props.$completed
      ? `
    color: #3f4f5a;
    text-decoration: line-through;
  `
      : `
    color: #1c222b;
  `}
`

const DeleteButton = styled.button`
  padding: 0.5rem;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-left: auto;

  &:hover {
    color: #e94a4a;
    background-color: #fcecec;
  }
`
const DeleteIcon = styled(Trash2)`
  width: ${({ theme }) => theme.size.sm};
  height: ${({ theme }) => theme.size.sm};
`
