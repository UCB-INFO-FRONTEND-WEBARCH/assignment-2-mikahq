import "./TaskList.css";
import TaskItem from "./TaskItem";

function EmptyMessage() {
    return <p className="empty-message">No tasks yet</p>;
  }

function TaskList({ tasks = [], onToggle, onDelete }) {
  return (
    <section className="page">
      {tasks.length === 0 ? (
        <EmptyMessage />
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default TaskList;
