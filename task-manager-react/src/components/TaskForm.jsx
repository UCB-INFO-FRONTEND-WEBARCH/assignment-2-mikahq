function TaskForm() {

  e.preventDefault()

  function addTask(text) {
    const newTask = { id: Date.now(), text, complete: false };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== task));
  }

  return (
    <div className="container">
      <p> Item</p>
    </div>


  );
}

export default TaskForm