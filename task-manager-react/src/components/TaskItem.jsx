import { useState } from "react";

function TaskItem() {
  const [tasks, setTasks] = useState([]);

  function onDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleTask = (id) => {
    setTaskList(
      tasks.map((task) => {
        task, ud === id ? { ...task, completed: !task.completed } : task;
      })
    );
  };

  tasks.map((task, index) => (
    <li id tasks={index} className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        id={`task-${index}`}
      />
      <label htmlFor={`task-${index}`} className={`task-label-completed`}>
        {task.text}
      </label>
    </li>
  ));

  return <li> {Date.now()} Item</li>;
}

// - `id` - Unique identifier (Hint: `Date.now()` or `crypto.randomUUID()`)
// - `text` - The task description (string)
// - `completed` - Boolean for completion status

export default TaskItem;
