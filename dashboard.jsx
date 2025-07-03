import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: 100vh;
  background-color: hsl(216, 20%, 97%);
  font-family: 'Inter', system-ui, sans-serif;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: hsl(215, 25%, 15%);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`

const TitleIcon = styled.i`
  color: hsl(207, 90%, 54%);
`

const Subtitle = styled.p`
  color: hsl(215, 15%, 45%);
  font-size: 1rem;
`

const TodoContainer = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid hsl(215, 20%, 90%);
  overflow: hidden;
`

const AddTaskSection = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid hsl(215, 20%, 90%);
  background-color: hsl(216, 20%, 97%);
`

const AddTaskForm = styled.form`
  display: flex;
  gap: 0.75rem;
`

const TaskInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid hsl(215, 20%, 80%);
  border-radius: 0.5rem;
  font-size: 1rem;
  color: hsl(215, 25%, 15%);
  background: white;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: hsl(207, 90%, 54%);
    box-shadow: 0 0 0 2px hsla(207, 90%, 54%, 0.2);
  }

  &::placeholder {
    color: hsl(215, 15%, 55%);
  }
`

const AddButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: hsl(207, 90%, 54%);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: hsl(207, 90%, 48%);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  &:active {
    transform: translateY(1px);
  }
`

const FilterSection = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid hsl(215, 20%, 90%);
  background: white;
`

const FilterTabs = styled.div`
  display: flex;
  gap: 0.25rem;
  background-color: hsl(216, 20%, 95%);
  border-radius: 0.5rem;
  padding: 0.25rem;
`

const FilterButton = styled.button`
  flex: 1;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${(props) =>
    props.$active
      ? `
    background-color: white;
    color: hsl(207, 90%, 54%);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  `
      : `
    background-color: transparent;
    color: hsl(215, 15%, 45%);
    
    &:hover {
      color: hsl(215, 25%, 25%);
      background-color: hsl(216, 20%, 92%);
    }
  `}
`

const FilterCount = styled.span`
  ${(props) =>
    props.$active
      ? `
    background-color: hsl(207, 90%, 90%);
    color: hsl(207, 90%, 54%);
  `
      : `
    background-color: hsl(215, 15%, 85%);
    color: hsl(215, 15%, 45%);
  `}
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  margin-left: 0.5rem;
`

const TasksList = styled.div`
  border-bottom: 1px solid hsl(215, 20%, 90%);
`

const TaskItem = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid hsl(215, 20%, 90%);
  transition: background-color 0.15s ease;
  background-color: ${(props) =>
    props.$completed ? 'hsl(216, 20%, 98%)' : 'white'};

  &:hover {
    background-color: hsl(216, 20%, 97%);
  }

  &:last-child {
    border-bottom: none;
  }

  .delete-button {
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover .delete-button {
    opacity: 1;
  }
`

const TaskLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex: 1;
`

const TaskCheckbox = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.75rem;
  accent-color: ${(props) =>
    props.$completed ? 'hsl(142, 76%, 36%)' : 'hsl(207, 90%, 54%)'};
  cursor: pointer;
  transition: all 0.2s ease;
  /* 
  &:focus {
    outline: 2px solid hsla(207, 90%, 54%, 0.4);
    outline-offset: 2px;
  } */
`

const TaskText = styled.span`
  font-weight: 500;
  font-size: 1rem;
  user-select: none;
  transition: all 0.2s ease;

  ${(props) =>
    props.$completed
      ? `
    color: hsl(215, 15%, 55%);
    text-decoration: line-through;
  `
      : `
    color: hsl(215, 25%, 15%);
  `}
`

const DeleteButton = styled.button`
  padding: 0.5rem;
  border: none;
  background: transparent;
  color: hsl(215, 15%, 60%);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-left: auto;

  &:hover {
    color: hsl(0, 84%, 60%);
    background-color: hsl(0, 84%, 95%);
  }

  &:active {
    transform: scale(0.95);
  }
`

const EmptyState = styled.div`
  padding: 3rem;
  text-align: center;
`

const EmptyIcon = styled.div`
  color: hsl(215, 15%, 60%);
  margin-bottom: 1rem;
  font-size: 2.5rem;
`

const EmptyTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: hsl(215, 15%, 45%);
  margin-bottom: 0.5rem;
`

const EmptyDescription = styled.p`
  color: hsl(215, 15%, 55%);
  font-size: 1rem;
`

const Footer = styled.div`
  padding: 1rem 1.5rem;
  background-color: hsl(216, 20%, 97%);
  border-top: 1px solid hsl(215, 20%, 90%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
  color: hsl(215, 15%, 45%);
`

const FooterStats = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const FooterSeparator = styled.span`
  color: hsl(215, 15%, 70%);
`

const ClearButton = styled.button`
  background: none;
  border: none;
  color: hsl(215, 15%, 55%);
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease;
  font-size: 0.875rem;

  &:hover {
    color: hsl(0, 84%, 60%);
  }
`

export default function TodoPage() {
  const [tasks, setTasks] = useState([])
  const [newTaskText, setNewTaskText] = useState('')
  const [filter, setFilter] = useState('all')

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('todo-tasks')
    if (savedTasks) {
      try {
        const parsedTasks = JSON.parse(savedTasks)
        setTasks(parsedTasks)
      } catch (error) {
        console.error('Error loading tasks from localStorage:', error)
      }
    }
  }, [])

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('todo-tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (e) => {
    e.preventDefault()
    const trimmedText = newTaskText.trim()

    if (!trimmedText) return

    const newTask = {
      id: Date.now(),
      text: trimmedText,
      completed: false,
      createdAt: Date.now(),
    }

    setTasks((prev) => [...prev, newTask])
    setNewTaskText('')
  }

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.completed))
  }

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case 'active':
        return !task.completed
      case 'completed':
        return task.completed
      default:
        return true
    }
  })

  const activeTasks = tasks.filter((task) => !task.completed)
  const completedTasks = tasks.filter((task) => task.completed)

  return (
    <Container>
      <Header>
        <Title>
          <TitleIcon className="fas fa-tasks" />
          Список задач
        </Title>
        <Subtitle>Организуйте свои дела эффективно</Subtitle>
      </Header>

      <TodoContainer>
        <AddTaskSection>
          <AddTaskForm onSubmit={addTask}>
            <TaskInput
              type="text"
              placeholder="Введите новую задачу..."
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
            />
            <AddButton type="submit">
              <i className="fas fa-plus" />
              Добавить
            </AddButton>
          </AddTaskForm>
        </AddTaskSection>

        <FilterSection>
          <FilterTabs>
            <FilterButton
              $active={filter === 'all'}
              onClick={() => setFilter('all')}
            >
              Все
              <FilterCount $active={filter === 'all'}>
                {tasks.length}
              </FilterCount>
            </FilterButton>
            <FilterButton
              $active={filter === 'active'}
              onClick={() => setFilter('active')}
            >
              Активные
              <FilterCount $active={filter === 'active'}>
                {activeTasks.length}
              </FilterCount>
            </FilterButton>
            <FilterButton
              $active={filter === 'completed'}
              onClick={() => setFilter('completed')}
            >
              Выполненные
              <FilterCount $active={filter === 'completed'}>
                {completedTasks.length}
              </FilterCount>
            </FilterButton>
          </FilterTabs>
        </FilterSection>

        {filteredTasks.length > 0 ? (
          <TasksList>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id} $completed={task.completed}>
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
                  <i className="fas fa-trash-alt" />
                </DeleteButton>
              </TaskItem>
            ))}
          </TasksList>
        ) : (
          <EmptyState>
            <EmptyIcon>
              <i className="fas fa-clipboard-list" />
            </EmptyIcon>
            <EmptyTitle>
              {filter === 'all'
                ? 'Задач пока нет'
                : filter === 'active'
                ? 'Нет активных задач'
                : 'Нет выполненных задач'}
            </EmptyTitle>
            <EmptyDescription>
              {filter === 'all'
                ? 'Добавьте свою первую задачу, чтобы начать организовывать дела'
                : filter === 'active'
                ? 'Все задачи выполнены! Добавьте новые или переключитесь на другой фильтр'
                : 'Пока нет выполненных задач. Отметьте некоторые задачи как завершенные'}
            </EmptyDescription>
          </EmptyState>
        )}

        <Footer>
          <FooterStats>
            <span>{activeTasks.length} активные задачи</span>
            <FooterSeparator>•</FooterSeparator>
            <span>{completedTasks.length} выполнено</span>
          </FooterStats>
          {completedTasks.length > 0 && (
            <ClearButton onClick={clearCompleted}>
              Очистить выполненные
            </ClearButton>
          )}
        </Footer>
      </TodoContainer>
    </Container>
  )
}
