import "./TaskForm.css";
import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim()) {
      onAddTask(inputValue); 
      setInputValue(""); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleClick();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="task">
        <input
          type="text"
          placeholder="Enter task"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit" id="add-task-button">
          + Add Task
        </button>
      </div>
    </form>
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
