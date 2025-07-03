import styled from 'styled-components'
import TaskItem from './TaskItem'

export default function TasksList({ tasks, toggleTask, deleteTask }) {
  return (
    <Wrapper>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <EmptyTaskText>Пусто</EmptyTaskText>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: clamp(6rem, 9vw, 10rem);
  max-height: 40vh;
  overflow-y: auto;
`
const EmptyTaskText = styled.p`
  padding-top: ${({ theme }) => theme.size.sm};
  text-align: center;
  font-style: italic;
  color: ${({ theme }) => theme.colors.lightGray};
`
