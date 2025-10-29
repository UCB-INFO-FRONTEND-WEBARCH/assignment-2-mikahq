import { useState } from "react";
import "./TaskList.css";
import TaskItem from "./TaskItem";

function TaskList() {
  const tasks = [
    "Call Mom",
    "Buy the new issue of Scientific American",
    "Return the textbook to Josie",
    "Buy the new album by Rake",
    "Buy a gift card for Dad",
  ];

  // not passing setTasks to task list
  // displays tasks
  // don't need to modify this component at all

  const [taskList, setTaskList] = useState([]);
  const [inputValue, setInputValue] = useState("");

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

  return (
    <section className="page">
      <h1>Inbox</h1>
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

      <ul className="task-list">
        {/* {taskList.map((task) => (
          <li key={task.id}> */}
        {/* <li>
          <label className="container">
            <TaskItem />
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <span className="page-li">{task.text}</span>
        </li> */}

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
