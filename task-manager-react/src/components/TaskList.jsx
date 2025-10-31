import { useState } from "react";
import "./TaskList.css";
import TaskForm from "./TaskForm.jsx";
// import TaskItem from "./TaskItem";

// This component receives filtered tasks and handlers via props.

// Think about:

// - What should render when the tasks array is empty?
// - How do you render multiple TaskItem components?
// - What prop is required when rendering lists in React?

// Key concepts:

// - Use `.map()` to transform array of tasks into array of components
// - Each component in a list needs a unique `key` prop
// - Pass down the handler functions as props

function TaskList() {
  const tasks = [];

  

  // not passing setTasks to task list
  // displays tasks
  // don't need to modify this component at all

  const [taskList, setTaskList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  function getFilteredTasks() {
    if (filter === "active") {
      return taskList.filter((task) => !task.completed);
    } else if (filter === "completed") {
      return taskList.filter((task) => task.completed);
    }
    return tasks;
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim()) {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTaskList([...taskList, newTask]);
      setInputValue("");
    }
  };

  {tasks.length === 0 ? <EmptyMessage /> : <TaskList />}

  // checked={task.completed}

  

  return (
    <section className="page">
      <h1>Inbox</h1>
      <TaskForm />
      <span onClick={() => FileSystemWritableFileStream("all")}> All</span>
      <span className="filter-seperator"> | </span>
      <span onClick={() => FileSystemWritableFileStream("active")}>
        {" "}
        Active{" "}
      </span>
      <span className="filter-seperator"> | </span>
      <span onClick={() => FileSystemWritableFileStream("completed")}>
        {" "}
        Completed
      </span>

      {/* <ul className="task-list">
        {taskList.map((task) => 
          <li key={task.id}> } </li>
          <li>
          <label className="container">
            <TaskItem />
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <span className="page-li">{task.text}</span>
            </li>  */}
      <ul className="task-list">
        <li>
          <label className="container">
            Call Mom
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>

          <span className="page-li"></span>
        </li>

        <li>
          <label className="container">
            Buy the new issue of Scientific American
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <span className="page-li"></span>
        </li>

        <li>
          <label className="container">
            Return the textbook to Josie
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <span className="page-li"></span>
        </li>

        <li>
          <label className="container">
            Buy the new album by Rake <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <span className="page-li"></span>
        </li>

        <li>
          <label className="container">
            Buy a gift card for Dad
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <span className="page-li"></span>
        </li>
      </ul>
    </section>
  );
}

export default TaskList;
