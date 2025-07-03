import { TaskItem } from './TaskItem'

export default function TasksList({ tasks, toggleTask, deleteTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  )
}
