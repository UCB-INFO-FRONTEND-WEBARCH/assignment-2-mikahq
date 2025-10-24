// import { useState } from "react";
import "./index.css";
import Header from "./Header.jsx";
import Nav from "./Nav.jsx";
import List from "./List.jsx";
import TaskList from "./components/TaskList";

// import TaskItem from "./components/TaskItem";
// import TaskForm from "./components/TaskForm";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <TaskList />
    </>
  );
}

export default App;

// Unused code

//const [count, setCount] = useState([]);

// const [tasks, setTasks] = useState([]); // Single source of truth

// return (
//   // <TaskForm/>
//   <>
//     <TaskList tasks={tasks} />
//     <TaskForm tasks={tasks} setTasks={setTasks} />
//   </>
// );

// function addTask(text) {
//   const newTask = { id: Date.now(), text, complete: false };
//   setTasks([...tasks, newTask]);
// }

// function deleteTask(id) {
//   setTasks(tasks.filter((task) => task.id !== id));
// }

// return (
//   <div className="app">
//     <TaskForm onAddTask={addTask} />
//     <TaskList tasks={tasks} onDeleteTask={deleteTask} />
//   </div>
// );

// return (
//   <div>
//     <a href="task-manager-react/index.html"></a>
//   </div>
// );
