function TaskForm() {
  e.preventDefault();

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

export default TaskForm;

// // const addTask = (taskText) => {
//     // Add new task to state
//   };

//   const toggleTask = (id) => {
//     // Toggle task completion
//   };

//   const deleteTask = (id) => {
//     // Remove task from state
//   };

//   return (
//     <div className="app">
//       <TaskForm onAddTask={addTask} />
//       <TaskCounter tasks={tasks} />
//       <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
//     </div>
//   );
// }

// - Its own local state for the input value (controlled component)
// - A form with onSubmit handler
// - An input with value and onChange props
// - Validation to prevent empty tasks
// - Clear the input after submission

// Key concepts:

// - `e.preventDefault()` stops form from refreshing page
// - Controlled components: input value comes from state
// - Call the `onAddTask` prop function with the text
// - Use `.trim()` to check for empty/whitespace-only input
