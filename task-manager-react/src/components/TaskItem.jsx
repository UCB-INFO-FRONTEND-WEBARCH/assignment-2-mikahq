function TaskItem({ task, onToggle, onDelete }) {
  const handleToggle = () => {
    onToggle(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <li className={task.completed ? "task-item task-item-completed" : "task-item"}>
      <label className="container">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
        />
        <span className="checkmark"></span>
        <span className={task.completed ? "task--label-completed" : "task-text"}>
          {task.text}
        </span>
      </label>
      <button onClick={handleDelete} className="delete-btn">
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
