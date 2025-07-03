import styled from 'styled-components'
import { useState } from 'react'

export default function AddTaskSection({ addTask }) {
  const [newTaskText, setNewTaskText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedText = newTaskText.trim()
    if (trimmedText) {
      addTask(trimmedText)
      setNewTaskText('')
    }
  }

  return (
    <Wrapper>
      <AddTaskForm onSubmit={handleSubmit}>
        <TaskInput
          type="text"
          placeholder="Введите новую задачу"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <AddButton type="submit">Добавить</AddButton>
      </AddTaskForm>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.size.xs};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  background-color: ${({ theme }) => theme.colors.background};
`

const AddTaskForm = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.size.sm};

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`

const TaskInput = styled.input`
  flex: 1;
  padding: clamp(0.5rem, 2vw, 0.75rem) clamp(0.75rem, 3vw, 1rem);

  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  background: white;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue};
    box-shadow: 0 0 0 2px rgba(21, 96, 189, 0.2);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.size.xs};
  }
`

const AddButton = styled.button`
  padding: clamp(0.5rem, 2vw, 0.75rem) clamp(0.75rem, 3vw, 1rem);

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.blue};
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  font-size: ${({ theme }) => theme.size.xs};
  cursor: pointer;

  transition: all 0.2s ease;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: rgba(21, 96, 189, 0.9);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(2px);
  }
`
