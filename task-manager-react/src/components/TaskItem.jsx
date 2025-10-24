function TaskItem() {
  const [tasks, setTasks] = useState([]);
  setTasks([...tasks, newTask]);

  function addTask(name) {
    const newTask = { id: Date.now(), name, quantity: 1, completed: false };
    setTasks([...tasks, newTask]); // Spread existing, add new
  }

  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id)); // Filter out
  }

  function updateTask(id, newTask) {
    setTasks(
      tasks.map((task) => (tasks.id === id ? { ...task, task: newTask } : task))
    ); // Map to new array with updates
  }

  return <li> {new Date.now()} Item</li>;
}

// - `id` - Unique identifier (Hint: `Date.now()` or `crypto.randomUUID()`)
// - `text` - The task description (string)
// - `completed` - Boolean for completion status

export default TaskItem;
