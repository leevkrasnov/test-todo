import styled from 'styled-components'
import TitleHeader from './components/TitleHeader'
import AddTaskSection from './components/AddTaskSection'
import FilterSection from './components/FilterSection'
import TasksFooter from './components/TasksFooter'
import TasksList from './components/TaskList'
import { useTasks } from './hooks/useTasks'
import { useState } from 'react'

export default function App() {
  const { tasks, addTask, toggleTask, deleteTask, clearCompleted } = useTasks()
  const [filter, setFilter] = useState('all')

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

  const activeCount = tasks.filter((task) => !task.completed).length
  const completedCount = tasks.filter((task) => task.completed).length

  return (
    <Wrapper>
      <TitleHeader />
      <TodoContainer>
        <AddTaskSection addTask={addTask} />
        <FilterSection
          setFilter={setFilter}
          currentFilter={filter}
          tasksCount={tasks.length}
          activeCount={activeCount}
          completedCount={completedCount}
        />
        <TasksList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
        <TasksFooter
          activeCount={activeCount}
          completedCount={completedCount}
          clearCompleted={clearCompleted}
        />
      </TodoContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.size.basic};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: ${({ theme }) => theme.size.sm};
`
const TodoContainer = styled.main`
  width: 60vw;

  background: #fff;
  border-radius: 0.75rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.gray};
  overflow: hidden;

  @media (max-width: 800px) {
    width: 80vw;
  }
`
