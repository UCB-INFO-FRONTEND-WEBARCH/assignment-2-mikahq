function TaskForm() {
  e.preventDefault();

  const checkbox = document.querySelector("#id-checkbox");

  checkbox.addEventListener("click", checkboxClick);

  function checkboxClick(event) {
    const warn = "preventDefault() won't let you check this!\n";
    document.getElementById("output-box").innerText += warn;
    event.preventDefault();
  }

  function onAddTask(taskText) {
    // Add new task to state
    <div className="task">
        <input
          type="text"
          placeholder="Enter your task here"
          value={inputValue}
          onChange={handleChange}
        />
        <button id="add-task-button" onClick={handleClick}>
          + Add Task
      </button>
      </div>
  }

  
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

// **TaskForm Component**

// This component needs:

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
